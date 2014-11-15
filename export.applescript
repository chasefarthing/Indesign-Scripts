set my_destination to (choose folder with prompt "Choose destination for the PDFs") as string
set doc_name to get name of active document
set myFile to my_destination & (characters 1 thru -6 of doc_name) & ".pdf"

tell application "Adobe InDesign CC"
	--Get the bleed amounts from the document's bleed.
	tell document preferences of active document
		set myX1Offset to document bleed inside or left offset
		set myY1Offset to document bleed top offset
		set myX2Offset to document bleed outside or right offset
		set myY2Offset to document bleed bottom offset
	end tell
	tell PDF export preferences
		--Basic PDF output options.
		set page range to all pages
		set acrobat compatibility to acrobat 6
		set export guides and grids to false
		set export layers to false
		set export nonprinting objects to false
		set export reader spreads to false
		set generate thumbnails to false
		try
			set ignore spread overrides to false
		end try
		set include bookmarks to false
		set include hyperlinks to false
		try
			set include ICC profiles to true
		end try
		set include slug with PDF to false
		set include structure to false
		set interactive elements option to do not include
		--Setting subset fonts below to zero disallows font subsetting
		--set subset fonts below to some other value to use font subsetting.
		set subset fonts below to 0
		--Bitmap compression/sampling/quality options.
		set color bitmap compression to auto compression
		set color bitmap quality to high
		set color bitmap sampling to bicubic downsample
		set threshold to compress color to 144
		set color bitmap sampling DPI to 144
		--is set to none.
		set grayscale bitmap compression to auto compression
		set grayscale bitmap quality to high
		set grayscale bitmap sampling to bicubic downsample
		set threshold to compress gray to 144
		set grayscale bitmap sampling DPI to 144
		--sampling is set to none.
		set monochrome bitmap compression to CCIT4
		set monochrome bitmap sampling to bicubic downsample
		--threshold to compress monochrome is not needed in this example.
		--monochrome bitmap sampling dpi is not needed when monochrome bitmap 
		--sampling is set to none.
		--Other compression options.
		set compression type to Compress Structure
		set compress text and line art to true
		set crop images to frames to true
		set optimize PDF to true
		--Printers marks and prepress options.
		set bleed bottom to myY2Offset
		set bleed top to myY1Offset
		set bleed inside to myX1Offset
		set bleed outside to myX2Offset
		--If any bleed area is greater than zero, then export the bleed marks.
		if bleed bottom is 0 and bleed top is 0 and bleed inside is 0 and bleed outside is 0 then
			set bleed marks to false
		else
			set bleed marks to false
		end if
		set color bars to false
		--Color tile size and gray tile size are not used
		--unless the compression method chosen is JPEG 2000.
		--set color tile size to 256
		--set Gray tile size to 256
		set crop marks to false
		set omit bitmaps to false
		set omit EPS to false
		set omit PDF to false
		set page information marks to false
		set page marks offset to "0"
		set PDF color space to RGB
		set PDF mark type to default
		set printer mark weight to p125pt
		set registration marks to false
		--simulate overprint is only available when the export standard 
		--is PDF/X-1a or PDF/X-3
		--set simulate overprint to false
		set use document bleed with PDF to false
		--Set viewPDF to true to open the PDF in Acrobat or Adobe Reader.
		set view PDF to false
	end tell

	--Now export the document.
	tell active document
		
		--You'll have to fill in a valid file path for your system.
		export format PDF type to my_destination & (characters 1 thru -6 of doc_name) & ".pdf" without showing options
	end tell
end tell
--The Finder will try to open the destination folder

try
tell application "Finder"
activate
open my_destination
end tell
end try

--   tell application "Adobe Acrobat Pro"
--       activate
--       open myFile
--   end tell
--   tell application "System Events"
--       tell process "Acrobat"
--           click menu item "PDF Optimizer..." of menu 1 of menu bar item "Advanced" of menu bar 1
--           repeat until exists window "PDF Optimizer"
--               delay 0.2
--           end repeat
--           tell pop up button 1 of window "PDF Optimizer"
--               click
--               click menu item "Custom" of menu 1
--           end tell
--           click button "OK" of window "PDF Optimizer"
--           repeat until exists window "Save Optimized As"
--               delay 0.2
--           end repeat
--           tell window "Save Optimized As"
--               click button "Save"
--               repeat until exists sheet 1
--                   delay 0.2
--               end repeat
--               click button "Replace" of sheet 1
--           end tell
--       end tell
--   end tell
--   tell application "Adobe Acrobat Pro" to close active doc saving yes
--end process_item

