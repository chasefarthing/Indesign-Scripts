// 1. Control for documents open. If true, the script launches the dialog

if(app.documents.length >0)
{
	var doc = app.documents[0];
	if(doc.saved==true)
	{
		extractdlg();
	}
	else
	{
		alert("Please save you file first before processing the script");
	}
}
else
{
	alert("No documents open !"); 
}

// 2. Gathers many infos on the document.

function pageinfos()
{
	var pg = doc.pages;
	var pglg  = pg.length;
	var pFirst = Number(pg[0].name);
	var pLast = Number(pg[pglg-1].name);
	var pgHeigth = doc.documentPreferences.pageHeight;
	var pgWitdh = doc.documentPreferences.pageWidth;
	var docname = String(doc.fullName).replace(/\.indd$/, "");
	var docpath = doc.filePath;
	var docfullname = doc.fullName;

	var infoarr = [pglg, pFirst, pLast, pgHeigth,pgWitdh,docname,docpath,docfullname];
	return infoarr;
}


// 3. Main function. First part is the dialog

function extractdlg()
{
	var docfile = String(pageinfos()[7]);
	var dlg = app.dialogs.add({name : "Pages Extractor 1.1 - ©www.loicaigon.com"}); 
	with(dlg)
	{
		var firstclmn = dialogColumns.add();
		with(firstclmn)
		{
			var firstrow = dialogRows.add();
			with(firstrow)
			{
				var clmn1 = dialogColumns.add();
				with(clmn1)
				{
					var row1 = dialogRows.add();
					row1.staticTexts.add({staticLabel : "Extract pages..."});
					var row2 = dialogRows.add();
					with(row2)
					{
						var r2c2 = dialogColumns.add();
						with(r2c2)
						{
							var r2c2r1 = dialogRows.add();
							var pgStart = r2c2r1.realEditboxes.add({editValue:pageinfos()[1], minWidth: 30});
						}
						var r2c3 = dialogColumns.add();
						with(r2c3)
						{
							var r2c3r1 = dialogRows.add();
							 r2c3r1.staticTexts.add({staticLabel : "to"});
						}
						var r2c4 = dialogColumns.add();
						with(r2c4)
						{
							var r2c4r1 = r2c4.dialogRows.add();
							var pgEnd = r2c4r1.realEditboxes.add({editValue:pageinfos()[2], minWidth: 30});
						}
							
					}
				}
			}
			var secondrow = dialogRows.add();
			with(secondrow)
			{
				var clmn2 = dialogColumns.add();
				with(clmn2)
				{
					var row2 = dialogRows.add();
					with(row2)
					{
						var sepbox = checkboxControls.add({staticLabel: "Extract as separate pages", checkedState:false});
					}
				}
			}
			var thirdrow = dialogRows.add();
			with(thirdrow)
			{
				var clmn3 = dialogColumns.add();
				with(clmn3)
				{
					var row3 = dialogRows.add();
					with(row3)
					{
						var rembox = checkboxControls.add({staticLabel: "Remove pages after extraction", checkedState:false});
					}
				}
			}
			var foutrhrow = dialogRows.add();
			with(foutrhrow)
			{
				var clmn4 = dialogColumns.add();
				with(clmn4)
				{
					var row4 = dialogRows.add();
					with(row4)
					{
						var savebox = checkboxControls.add({staticLabel: "Choose other extraction folder", checkedState:false});
					}
				}
			}
		}
	}

	// If the user made good choices, the script operates.
	
	if(dlg.show()==true)
	{
		if(pgStart.editValue >= pageinfos()[2] || pgEnd.editValue <= pageinfos()[1])
		{
			alert("The pages numbers may be at least "+pageinfos()[1] +" for the first page of the range and "+ pageinfos()[2] + " at maximum for the last page");
		}
		else
		{	
			// If the user choose to pick a different folder, he will be asked for. Otherwise, the dafault folder is the one containing the file.
			if(savebox.checkedState==true)
			{
				var extractfolder = Folder.selectDialog ("Please choose a folder where to save extracted pages...");
				if(!extractfolder)
				{
					exit();
				}
				else
				{
					var saveextractfolder = String(extractfolder.fullName)+"/" +String(doc.name).replace (/\.indd/, "");
				}
			}
			else
			{
				var saveextractfolder = String(pageinfos()[5]);
			}
			var rem0 = pageinfos()[0]-1;
			var rem2 =  (pgStart.editValue-2);
			
			// Variables definition regarding to the choice of the user to separate or not the extracted pages.
			
			if(sepbox.checkedState==true)
			{	
				var W = pgEnd.editValue-pgStart.editValue+1;
				var rem1 = pgStart.editValue;
			}
			else
			{
				var W = 1;
				var rem1 = pgEnd.editValue;
			}
			
			// Extraction loop 
			for(w=0; w<W;w++)
			{
				if(sepbox.checkedState==true)
				{
					var exportdocname = "_Pg" +(pgStart.editValue+w) +".indd";
				}
				else
				{
					var exportdocname = "_Pg"+pgStart.editValue+"_to_Pg_"+pgEnd.editValue +".indd";
				}
				for(var i=rem0; i>=rem1+w;i--)
				{
					doc.pages[i].remove();
				}
				for(var i=rem2+w; i>=0;i--)
				{
					doc.pages[i].remove();
				}
				var exportdoc = doc.save(File(saveextractfolder + exportdocname));
				exportdoc.close(SaveOptions.no);
				if(sepbox.checkedState==true && w<(pgEnd.editValue-pgStart.editValue))
				{
					app.open(File(docfile));
				}
			}
		
			// If the user chose to remove the extracted pages from the original document, it will re open the first document then remove the unuseful pages.
			if(rembox.checkedState == true)
			{
				app.open(File(docfile));
				for(var i=pgEnd.editValue-1; i>=pgStart.editValue-1;i--)
				{
					doc.pages[i].remove();
				}
				app.activeDocument.close(SaveOptions.yes);
			}
		}
	}
}