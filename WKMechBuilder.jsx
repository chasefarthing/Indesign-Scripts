// Chase's Auto Mech Builder 3000
// Odd things:
// var oneInch Creates a variable to convert different measurement units back to the inches equivalent
//
// To Do
// Clean up and simplify 


// If we stick to setting the units to inches we could probably delete the "oneInch" variable
app.viewPreferences.horizontalMeasurementUnits =  MeasurementUnits.inches;
app.viewPreferences.verticalMeasurementUnits =  MeasurementUnits.inches;

function mech (doc)
{
	var w = new Window ("dialog", "W+K Mech Builder");
	var doc_unit = doc_units ();
	w.alignChildren = "fill", "fill";


	var main = w.add ('group');
	var main2 = w.add ('group');

	var top = main.add('panel');
	var top2 = main.add('group');

	var sub = main2.add ('panel');
	var sub2 = main2.add ('panel');

	var sub3 = top2.add ('panel');
	var sub4 = top2.add ('panel');

	main.orientation = 'row';

	top.orientation = 'column';
	top2.orientation = 'column';	
	top2.alignChildren = "right";


	main.alignChildren = "fill", "fill";
	main.alignment = "left";


	

	// top2.alignment = "bottom";
	// sub3.alignment = "bottom";


	
	main2.orientation = 'row';


	sub.orientation = 'column';
	sub.alignChildren = "top", "right";
	sub2.orientation = 'column';
	sub2.alignChildren = "top", "right";

	var g1 = sub3.add ("group");
	var g2 = sub3.add ("group");

	var t1 = top.add ("group");


	var c3 = sub4.add ("group");
	var c4 = sub4.add ("group");

	var g3 = sub.add ("group");
	var g4 = sub.add ("group");
	var g5 = sub.add ("group");
	var g6 = sub.add ("group");

	var s3 = sub2.add ("group");
	var s4 = sub2.add ("group");
	var s5 = sub2.add ("group");
	var s6 = sub2.add ("group");


	g1.alignment =  "right";
	g2.alignment =  "right";

	c4.alignment =  "left";
	sub4.alignChildren = "left";


	g3.alignment =  "right";
	g4.alignment =  "right";
	g5.alignment =  "right";
	g6.alignment =  "right";

	s3.alignment =  "right";
	s4.alignment =  "right";
	s5.alignment =  "right";
	s6.alignment =  "right";


	g1.orientation = 'row';
	g2.orientation = 'row';

	t1.orientation = 'column';

	t1.alignChildren = "left";

	g3.orientation = 'row';
	g4.orientation = 'row';
	g5.orientation = 'row';
	g6.orientation = 'row';

	s3.orientation = 'row';
	s4.orientation = 'row';
	s5.orientation = 'row';
	s6.orientation = 'row';

//				TRIM INPUT

g1.add ("statictext", undefined, "Trim Height:");

var trimHeight = g1.add ("edittext");
trimHeight.characters = 8;
trimHeight.text = convert_units ("11 in", doc_unit);
trimHeight.active = true;


g2.add ("statictext", undefined, "Trim Width:");
var trimWidth = g2.add ("edittext");
trimWidth.characters = 8;
trimWidth.text = convert_units ("8.5 in", doc_unit);



c3.add ("statictext", undefined, "For Spreads");
c4.add ("statictext", undefined, "Gutter:");
var gutter = c4.add ("edittext");
gutter.characters = 8;
gutter.text = convert_units (".25 in", doc_unit);


t1.add ("statictext", undefined, "Mech Type");
var r1 = t1.add ("radiobutton", undefined, "Bus Shelter");
var r2 = t1.add ("radiobutton", undefined, "Column");
var r3 = t1.add ("radiobutton", undefined, "Newspaper");
var r4 = t1.add ("radiobutton", undefined, "OOH Bulletin");
var r5 = t1.add ("radiobutton", undefined, "Print Page");
var r6 = t1.add ("radiobutton", undefined, "Spread");






//					BLEED INPUT

g3.add ("statictext", undefined, "Bleed Left:");
var bleedLeft = g3.add ("edittext");
bleedLeft.characters = 8;
bleedLeft.text = convert_units (".125 in", doc_unit);
g4.add ("statictext", undefined, "Bleed Right:");
var bleedRight = g4.add ("edittext");
bleedRight.characters = 8;
bleedRight.text = convert_units (".125 in", doc_unit);
g5.add ("statictext", undefined, "Bleed Top:");
var bleedTop = g5.add ("edittext");
bleedTop.characters = 8;
bleedTop.text = convert_units (".125 in", doc_unit);
g6.add ("statictext", undefined, "Bleed Bottom:");
var bleedBottom = g6.add ("edittext");
bleedBottom.characters = 8;
bleedBottom.text = convert_units (".125 in", doc_unit);

// SAFETY INPUT

s3.add ("statictext", undefined, "Safety Left:");
var marginLeft = s3.add ("edittext");
marginLeft.characters = 8;
marginLeft.text = convert_units (".25 in", doc_unit);
s4.add ("statictext", undefined, "Safety Right:");
var marginRight = s4.add ("edittext");
marginRight.characters = 8;
marginRight.text = convert_units (".25 in", doc_unit);
s5.add ("statictext", undefined, "Safety Top:");
var marginTop = s5.add ("edittext");
marginTop.characters = 8;
marginTop.text = convert_units (".25 in", doc_unit);
s6.add ("statictext", undefined, "Safety Bottom:");
var marginBottom = s6.add ("edittext");
marginBottom.characters = 8;
marginBottom.text = convert_units (".25 in", doc_unit);


// Convert units back to default when changed ie pts > in
trimHeight.onChange = function () {trimHeight.text = convert_units (trimHeight.text, doc_unit)};
trimWidth.onChange = function () {trimWidth.text = convert_units (trimWidth.text, doc_unit)};

gutter.onChange = function () {gutter.text = convert_units (gutter.text, doc_unit)};

bleedLeft.onChange = function () {bleedLeft.text = convert_units (bleedLeft.text, doc_unit)};
bleedRight.onChange = function () {bleedRight.text = convert_units (bleedRight.text, doc_unit)};
bleedTop.onChange = function () {bleedTop.text = convert_units (bleedTop.text, doc_unit)};
bleedBottom.onChange = function () {bleedBottom.text = convert_units (bleedBottom.text, doc_unit)};

marginLeft.onChange = function () {marginLeft.text = convert_units (marginLeft.text, doc_unit)};
marginRight.onChange = function () {marginRight.text = convert_units (marginRight.text, doc_unit)};
marginTop.onChange = function () {marginTop.text = convert_units (marginTop.text, doc_unit)};
marginBottom.onChange = function () {marginBottom.text = convert_units (marginBottom.text, doc_unit)};


var myButtonGroup = w.add ("group");
myButtonGroup.alignment = "right";
myButtonGroup.orientation = "row";
myButtonGroup.add ("button", undefined, "Cancel");
var OK = myButtonGroup.add ("button", undefined, "OK");


// Until radio button is selected
OK.enabled = false;


// Their's probably a simpler way
r1.onClick = function () {OK.enabled = true};
r2.onClick = function () {OK.enabled = true};
r3.onClick = function () {OK.enabled = true};
r4.onClick = function () {OK.enabled = true};
r5.onClick = function () {OK.enabled = true};
r6.onClick = function () {OK.enabled = true};


function selected_rbutton (rbuttons)
{
	for (var i = 0; i < rbuttons.children.length; i++)
		if (rbuttons.children[i].value == true)
			return rbuttons.children[i].text;

	}








	if (w.show () == 1){ 

		var trimHeight   = trimHeight.text;
		var trimWidth    = trimWidth.text;
		var bleedLeft    = bleedLeft.text;
		var bleedRight   = bleedRight.text;
		var bleedTop     = bleedTop.text;
		var bleedBottom  = bleedBottom.text;
		var marginLeft   = marginLeft.text;
		var marginRight  = marginRight.text;
		var marginTop    = marginTop.text;
		var marginBottom = marginBottom.text;
		var mechType =  selected_rbutton (t1);
		var gutter = gutter.text;


		myMakeDocument(trimHeight, trimWidth, bleedLeft, bleedRight, bleedTop, bleedBottom, marginLeft, marginRight, marginTop, marginBottom, mechType, gutter);}


		else {
			exit ();

		}


	}




// Call Main Function
mech();


// Thanks to sidenotes script this fixes the measurement conversion issues
function convert_units (n, to)
{
	var m = [];
	m["ag"] = 5.1428571428;
	m["p"] = 12.0000000000;
	m["mm"] = 2.8346456692;
	m["cm"] = 28.3464566929;
	m["in"] = 72.00000000;
	m["c"] = 12.7878751998;
	m["tr"] = 3.0112500000; // traditional point -- but we don't do anything with it yet
	m["pt"] = 1.0000000000;
	obj = fix_measurement (n);
	var temp = (obj.amount * m[obj.unit]) / m[to];
	return output_format (temp, to)
}

function output_format (amount, target)
{
	amount = amount.toFixed (3).replace (/\.?0+$/g, "");
	if (target.length == 2) // two-character unit: pt, mm, etc.
		return String (amount) + " " + target;
	else // "p" or "c"
	{
		// calculate the decimal
		var decimal = (Number (amount) - parseInt (amount)) * 12;
		// return the integer part of the result + infix + formatted decimal
		return parseInt (amount) + target + decimal;
	}
}


function fix_measurement (n)
{
	// infixed "p" and "c" to decimal suffixes: 3p4 > 3.5 p
	n = n.replace (/(\d+)([pc])([.\d]+)$/, function () {return Number (arguments[1]) + Number (arguments[3]/12) + arguments[2]});
	// add unit if necessary
	n = n.replace (/(\d)$/, "$1" + doc_units (app.documents[0]))
	// split on unit
	var temp = n.split (/(ag|cm|mm|c|pt|p|in)$/);
	if (temp.length == 1)
		return {amount: Number (temp[0]), unit: doc_units ()};
	else
		return {amount: Number (temp[0]), unit: temp[1]};
}


function doc_units ()
{
	switch (app.viewPreferences.horizontalMeasurementUnits)
	{
		case 2051106676: return 'ag';
		case 2053336435: return 'cm';
		case 2053335395: return 'c';
		case 2053729891: return 'in';
		case 2053729892: return 'in';
		case 2053991795: return 'mm';
		case 2054187363: return 'p';
		case 2054188905: return 'pt';
	}
}


// The creation of the mechanical (the guts)
function myMakeDocument(trimHeight, trimWidth, bleedLeft, bleedRight, bleedTop, bleedBottom, marginLeft, marginRight, marginTop, marginBottom, mechType, gutter){

	var doc_unit = doc_units ();
// Create a new document.
var myDocument = app.documents.add()
var myPage = myDocument.pages.item(0);
with(myDocument.viewPreferences){


}


// Creates a variable to convert different measurement units back to the inches equivalent
var oneInch = convert_units("1 in", doc_unit);
var oneInch = Number(oneInch);


// Check if in inches

with (myDocument.viewPreferences){


	var myOldXUnits = horizontalMeasurementUnits;
	if (myOldXUnits == MeasurementUnits.inches){
		var unitQuotes = "\u0022";
	}else{
		var unitQuotes = "";
	}

}



with(myDocument.documentPreferences){



	facingPages = false;

	pageHeight = trimHeight;

	pageWidth = trimWidth;

	var trimHeight = Number(trimHeight);
	var trimWidth = Number(trimWidth);



// Set Doc Bleed
documentBleedUniformSize = false;
documentBleedBottomOffset = bleedBottom;
documentBleedTopOffset = bleedTop;
documentBleedInsideOrLeftOffset = bleedLeft;
documentBleedOutsideOrRightOffset = bleedRight;


// Gets rid of the Measurement letters (ie "in")
var bleedLeft = Number(bleedLeft);
var bleedRight = Number(bleedRight);
var bleedTop = Number(bleedTop);
var bleedBottom = Number(bleedBottom);

// Create Slug Variables
var slugTop = oneInch + bleedTop;
var slugBottom = oneInch * 3.5 + bleedBottom;
var slugRight = oneInch + bleedRight;
var slugLeft = oneInch + bleedLeft;


// Set Doc Slug
slugBottomOffset = slugBottom;
slugTopOffset = slugTop;
slugInsideOrLeftOffset = slugLeft;
slugRightOrOutsideOffset = slugRight;

}

with (myDocument.pages.item(0).marginPreferences){


// ADD IF

var gutter = Number(gutter);

if (mechType === "Spread"){

	columnCount = 2;
	columnGutter = oneInch * gutter;
}

else{

	columnCount = 1;
	columnGutter = oneInch * .25;

}

bottom = marginBottom

// When document.documentPreferences.facingPages == true, 
// "left" means inside; "right" means outside.
left = marginLeft
right = marginRight
top = marginTop

}

myDocument.viewPreferences.rulerOrigin = RulerOrigin.spreadOrigin;


// Gets rid of the Measurement letters (ie "in") so they can be added as numbers later on
var marginLeft = Number(marginLeft);
var marginRight = Number(marginRight);
var marginTop = Number(marginTop);
var marginBottom = Number(marginBottom);





// Layer Creation

// Approvals
var layerApprovals= myDocument.layers.add();
layerApprovals.name = "Approvals";
layerApprovals.layerColor = UIColors.GRAY;
layerApprovals.ignoreWrap = false;
layerApprovals.visible = true;
layerApprovals.printable = true;

// Crops Legend
var layerLegend= myDocument.layers.add();
layerLegend.name = "Crops Legend";
layerLegend.layerColor = UIColors.RED;
layerLegend.ignoreWrap = false;
layerLegend.visible = true;
layerLegend.printable = true;

// Art
var layerArt= myDocument.layers.add();
layerArt.name = "Art";
layerArt.layerColor = UIColors.BLUE;
layerArt.ignoreWrap = false;
layerArt.visible = true;
layerArt.printable = true;

// Type
var layerType= myDocument.layers.add();
layerType.name = "Type";
layerType.layerColor = UIColors.MAGENTA;
layerType.ignoreWrap = false;
layerType.visible = true;
layerType.printable = true;

// Keylines
var layerKeylines= myDocument.layers.add();
layerKeylines.name = "Keylines";
layerKeylines.layerColor = UIColors.GREEN;
layerKeylines.ignoreWrap = false;
layerKeylines.visible = true;
layerKeylines.printable = true;

// Guides
var layerGuides= myDocument.layers.add();
layerGuides.name = "Guides";
layerGuides.layerColor = UIColors.LIGHT_BLUE;
layerGuides.ignoreWrap = false;
layerGuides.visible = true;
layerGuides.printable = false;

// Removes the default layer "Layer 1"
var defaultLayer = myDocument.layers.item("Layer 1");
defaultLayer.remove();






// Guide Creation

// If Statement for spreads create guides for center + gutter

with(myDocument.pages.item(0)){

// Place guides at the margins of the page.
guides.add(myDocument.layers.item("Guides"), 
	{orientation:HorizontalOrVertical.horizontal, location:marginPreferences.top, fitToPage:false});

guides.add(myDocument.layers.item("Guides"), 
	{orientation:HorizontalOrVertical.vertical, location:marginPreferences.left, fitToPage:false});

guides.add(myDocument.layers.item("Guides"), 
	{orientation:HorizontalOrVertical.horizontal, location:trimHeight - marginPreferences.bottom, fitToPage:false});

guides.add(myDocument.layers.item("Guides"), 
	{orientation:HorizontalOrVertical.vertical, location:trimWidth - marginPreferences.right, fitToPage:false});

// Place guides at page trim.
guides.add(myDocument.layers.item("Guides"), 
	{orientation:HorizontalOrVertical.horizontal, location:0, fitToPage:false});

guides.add(myDocument.layers.item("Guides"), 
	{orientation:HorizontalOrVertical.vertical, location:trimWidth, fitToPage:false});

guides.add(myDocument.layers.item("Guides"), 
	{orientation:HorizontalOrVertical.horizontal, location:trimHeight, fitToPage:false});

guides.add(myDocument.layers.item("Guides"), 
	{orientation:HorizontalOrVertical.vertical, location:0, fitToPage:false});

// Slug Guide
guides.add(myDocument.layers.item("Approvals"), 
	{orientation:HorizontalOrVertical.horizontal, location:trimHeight + slugBottom -.5, fitToPage:false});



// Keyline Stroke color
myCyan = myDocument.colors.add({name:"Keylines", model:ColorModel.process, 
	colorValue:[100, 0, 0, 0]});

myBlack= myDocument.colors.add({name:"Cropmarks", model:ColorModel.process, 
	colorValue:[0, 0, 0, 100]});



// Draw the keylines, yeah it's messy
var trimKeyline = myPage.rectangles.add(myDocument.layers.item("Keylines"));
trimKeyline.geometricBounds = [0, 0, trimHeight, trimWidth];

trimKeyline.strokeColor = myCyan;
trimKeyline.strokeTint = 60;
trimKeyline.strokeWeight = .25;
trimKeyline.strokeAlignment = 1936998729;

// Safety Keylines - could probably be cleaned up
var safetyKeyline = myPage.rectangles.add(myDocument.layers.item("Keylines"));
safetyKeyline.geometricBounds = [marginTop, marginLeft, trimHeight - marginBottom, trimWidth - marginRight];

safetyKeyline.strokeColor = myCyan;
safetyKeyline.strokeTint = 30;
safetyKeyline.strokeWeight = .25;
safetyKeyline.strokeAlignment = 1936998729;


var trimMarks = {
	strokeColor: 'Black',
	strokeTint: 100,
	strokeWeight: .25,
};

var safetyMarks = {
	strokeColor: 'Black',
	strokeTint: 60,
	strokeWeight: .25,
};



// Create Crop Marks
var trimMarkLeftTop = myPage.graphicLines.add(myDocument.layers.item("Crops Legend"), undefined, undefined, trimMarks);
trimMarkLeftTop.paths.item(0).pathPoints.item(0).anchor = [ -bleedLeft, 0] ;
trimMarkLeftTop.paths.item(0).pathPoints.item(1).anchor = [ -bleedLeft - oneInch *.5, 0];

var trimMarkRightTop = myPage.graphicLines.add(myDocument.layers.item("Crops Legend"), undefined, undefined, trimMarks);
trimMarkRightTop.paths.item(0).pathPoints.item(0).anchor = [ bleedRight + trimWidth, 0] ;
trimMarkRightTop.paths.item(0).pathPoints.item(1).anchor = [ bleedRight + oneInch * .5 + trimWidth, 0];

var trimMarkRightBottom = myPage.graphicLines.add(myDocument.layers.item("Crops Legend"), undefined, undefined, trimMarks);
trimMarkRightBottom.paths.item(0).pathPoints.item(0).anchor = [ bleedRight + trimWidth, trimHeight] ;
trimMarkRightBottom.paths.item(0).pathPoints.item(1).anchor = [ bleedRight + oneInch * .5 + trimWidth, trimHeight];

var trimMarkLeftBottom = myPage.graphicLines.add(myDocument.layers.item("Crops Legend"), undefined, undefined, trimMarks);
trimMarkLeftBottom.paths.item(0).pathPoints.item(0).anchor = [ -bleedLeft, trimHeight] ;
trimMarkLeftBottom.paths.item(0).pathPoints.item(1).anchor = [ -bleedLeft - oneInch * .5, trimHeight];

var trimMarkTopLeft = myPage.graphicLines.add(myDocument.layers.item("Crops Legend"), undefined, undefined, trimMarks);
trimMarkTopLeft.paths.item(0).pathPoints.item(0).anchor = [0, -bleedTop] ;
trimMarkTopLeft.paths.item(0).pathPoints.item(1).anchor = [0, -bleedTop - oneInch * .5];

var trimMarkTopRight = myPage.graphicLines.add(myDocument.layers.item("Crops Legend"), undefined, undefined, trimMarks);
trimMarkTopRight.paths.item(0).pathPoints.item(0).anchor = [trimWidth, -bleedTop] ;
trimMarkTopRight.paths.item(0).pathPoints.item(1).anchor = [trimWidth, -bleedTop - oneInch *.5];

var trimMarkBottomLeft = myPage.graphicLines.add(myDocument.layers.item("Crops Legend"), undefined, undefined, trimMarks);
trimMarkBottomLeft.paths.item(0).pathPoints.item(0).anchor = [0, bleedBottom + trimHeight] ;
trimMarkBottomLeft.paths.item(0).pathPoints.item(1).anchor = [0, bleedBottom + oneInch * .5 + trimHeight];

var trimMarkBottomRight = myPage.graphicLines.add(myDocument.layers.item("Crops Legend"), undefined, undefined, trimMarks);
trimMarkBottomRight.paths.item(0).pathPoints.item(0).anchor = [trimWidth, bleedBottom + trimHeight] ;
trimMarkBottomRight.paths.item(0).pathPoints.item(1).anchor = [trimWidth, bleedBottom + oneInch * .5 + trimHeight];



// Create Crop Marks
var safetyMarkLeftTop = myPage.graphicLines.add(myDocument.layers.item("Crops Legend"), undefined, undefined, safetyMarks);
safetyMarkLeftTop.paths.item(0).pathPoints.item(0).anchor = [ -bleedLeft, marginTop] ;
safetyMarkLeftTop.paths.item(0).pathPoints.item(1).anchor = [ -bleedLeft - oneInch * .375, marginTop];

var safetyMarkRightTop = myPage.graphicLines.add(myDocument.layers.item("Crops Legend"), undefined, undefined, safetyMarks);
safetyMarkRightTop.paths.item(0).pathPoints.item(0).anchor = [ bleedRight + trimWidth, marginTop] ;
safetyMarkRightTop.paths.item(0).pathPoints.item(1).anchor = [ bleedRight + oneInch * .375 + trimWidth, marginTop];

var safetyMarkRightBottom = myPage.graphicLines.add(myDocument.layers.item("Crops Legend"), undefined, undefined, safetyMarks);
safetyMarkRightBottom.paths.item(0).pathPoints.item(0).anchor = [ bleedRight + trimWidth, trimHeight - marginBottom] ;
safetyMarkRightBottom.paths.item(0).pathPoints.item(1).anchor = [ bleedRight + oneInch * .375 + trimWidth, trimHeight - marginBottom];

var safetyMarkLeftBottom = myPage.graphicLines.add(myDocument.layers.item("Crops Legend"), undefined, undefined, safetyMarks);
safetyMarkLeftBottom.paths.item(0).pathPoints.item(0).anchor = [ -bleedLeft, trimHeight - marginBottom] ;
safetyMarkLeftBottom.paths.item(0).pathPoints.item(1).anchor = [ -bleedLeft - oneInch * .375, trimHeight - marginBottom];

var safetyMarkTopLeft = myPage.graphicLines.add(myDocument.layers.item("Crops Legend"), undefined, undefined, safetyMarks);
safetyMarkTopLeft.paths.item(0).pathPoints.item(0).anchor = [marginLeft, -bleedTop ] ;
safetyMarkTopLeft.paths.item(0).pathPoints.item(1).anchor = [marginLeft, -bleedTop - oneInch * .375 ];

var safetyMarkTopRight = myPage.graphicLines.add(myDocument.layers.item("Crops Legend"), undefined, undefined, safetyMarks);
safetyMarkTopRight.paths.item(0).pathPoints.item(0).anchor = [trimWidth - marginRight, -bleedTop ] ;
safetyMarkTopRight.paths.item(0).pathPoints.item(1).anchor = [trimWidth - marginRight, -bleedTop - oneInch * .375 ];

var safetyMarkBottomLeft = myPage.graphicLines.add(myDocument.layers.item("Crops Legend"), undefined, undefined, safetyMarks);
safetyMarkBottomLeft.paths.item(0).pathPoints.item(0).anchor = [marginLeft, bleedBottom + trimHeight ] ;
safetyMarkBottomLeft.paths.item(0).pathPoints.item(1).anchor = [ marginLeft, bleedBottom + oneInch * .375 + trimHeight ];

var safetyMarkBottomRight = myPage.graphicLines.add(myDocument.layers.item("Crops Legend"), undefined, undefined, safetyMarks);
safetyMarkBottomRight.paths.item(0).pathPoints.item(0).anchor = [trimWidth  - marginRight, bleedBottom + trimHeight] ;
safetyMarkBottomRight.paths.item(0).pathPoints.item(1).anchor = [trimWidth - marginRight, bleedBottom + oneInch * .375 + trimHeight ];




// Trim and Safety Text boxes

var textSize = {
	pointSize: 5.75, // TBD
};

var trimTextLeftTop = myPage.textFrames.add(myDocument.layers.item("Crops Legend"));
var trimTextLeftBottom = myPage.textFrames.add(myDocument.layers.item("Crops Legend"));
var trimTextTopLeft = myPage.textFrames.add(myDocument.layers.item("Crops Legend"));
var trimTextTopRight = myPage.textFrames.add(myDocument.layers.item("Crops Legend"));



// Set the bounds of the text frame
trimTextLeftTop.geometricBounds = [oneInch * -0.03125, 0 - slugLeft, oneInch * 0.03125, oneInch * -.5 - bleedLeft];
trimTextLeftBottom.geometricBounds = [oneInch * -0.03125 + trimHeight, 0 - slugLeft, oneInch * 0.03125 + trimHeight, oneInch * -.5 - bleedLeft];
trimTextTopLeft.geometricBounds = [-slugTop - oneInch * .03125, 0,-slugTop + oneInch * .03125, oneInch * .5];
trimTextTopRight.geometricBounds = [-slugTop - oneInch * .03125, trimWidth,-slugTop + oneInch * .03125, trimWidth + oneInch * .5];

// Rotate top Text Frames (Why 270 instead of 90 the other way? IDK)
var myRotateMatrix = 
app.transformationMatrices.add({counterclockwiseRotationAngle:270});
trimTextTopLeft.transform(CoordinateSpaces.pasteboardCoordinates, 
	AnchorPoint.leftCenterAnchor, myRotateMatrix);

var myRotateMatrix = 
app.transformationMatrices.add({counterclockwiseRotationAngle:270});
trimTextTopRight.transform(CoordinateSpaces.pasteboardCoordinates, 
	AnchorPoint.leftCenterAnchor, myRotateMatrix);


// Text Contents
trimTextLeftTop.contents = "Trim: " + trimHeight + unitQuotes;
trimTextLeftBottom.contents = "Trim: " + trimHeight + unitQuotes;
trimTextTopLeft.contents = "Trim: " + trimWidth + unitQuotes;
trimTextTopRight.contents = "Trim: " + trimWidth + unitQuotes;


// Set the text size   -   Their has to be a simpler way
trimTextLeftTop.parentStory.paragraphs.item(0).pointSize = 5.75;
trimTextLeftBottom.parentStory.paragraphs.item(0).pointSize = 5.75;
trimTextTopLeft.parentStory.paragraphs.item(0).pointSize = 5.75;
trimTextTopRight.parentStory.paragraphs.item(0).pointSize = 5.75;





// Safety Text Frames
var safetyTextLeftTop = myPage.textFrames.add(myDocument.layers.item("Crops Legend"));
var safetyTextLeftBottom = myPage.textFrames.add(myDocument.layers.item("Crops Legend"));
var safetyTextTopLeft = myPage.textFrames.add(myDocument.layers.item("Crops Legend"));
var safetyTextTopRight = myPage.textFrames.add(myDocument.layers.item("Crops Legend"));

// Set the bounds of the text frame
safetyTextLeftTop.geometricBounds = [oneInch * -0.03125 + marginTop, 0 - slugLeft, oneInch * 0.03125 + marginTop, oneInch * -.5 - bleedLeft];
safetyTextLeftBottom.geometricBounds = [oneInch * -0.03125 - marginBottom + trimHeight, 0 - slugLeft, oneInch * 0.03125 - marginBottom + trimHeight, - oneInch * .5 - bleedLeft];
safetyTextTopLeft.geometricBounds = [-slugTop  - oneInch * .03125, marginLeft,-slugTop + oneInch * .03125, oneInch * .5 + marginLeft];
safetyTextTopRight.geometricBounds =  [-slugTop  - oneInch * .03125, trimWidth - marginRight,-slugTop + oneInch * .03125, oneInch * .5  + trimWidth - marginRight];

// Rotate top Text Frames
var myRotateMatrix = 
app.transformationMatrices.add({counterclockwiseRotationAngle:270});
safetyTextTopLeft.transform(CoordinateSpaces.pasteboardCoordinates, 
	AnchorPoint.leftCenterAnchor, myRotateMatrix);

var myRotateMatrix = 
app.transformationMatrices.add({counterclockwiseRotationAngle:270});
safetyTextTopRight.transform(CoordinateSpaces.pasteboardCoordinates, 
	AnchorPoint.leftCenterAnchor, myRotateMatrix);

// Text Contents
safetyTextLeftTop.contents = "Safety: " + marginTop + unitQuotes;
safetyTextLeftBottom.contents = "Safety: " + marginBottom + unitQuotes;
safetyTextTopLeft.contents = "Safety: " + marginLeft + unitQuotes;
safetyTextTopRight.contents = "Safety: " + marginRight + unitQuotes;


// Set the text size   -   Again their has to be a simpler way
safetyTextLeftTop.parentStory.paragraphs.item(0).pointSize = 5.75;
safetyTextLeftBottom.parentStory.paragraphs.item(0).pointSize = 5.75;
safetyTextTopLeft.parentStory.paragraphs.item(0).pointSize = 5.75;
safetyTextTopRight.parentStory.paragraphs.item(0).pointSize = 5.75;




// Draw the rectangle for the GRACOL Image
var printerBar = myPage.rectangles.add(myDocument.layers.item("Crops Legend"));
printerBar.geometricBounds = [-slugTop / 2 - bleedTop * .5 - oneInch * .2712, trimWidth / 2 - oneInch * 4, -slugTop / 2 - bleedTop *.5 + oneInch * .2712, trimWidth / 2 + oneInch * 4];

// Tried using Logical Operators..


if (mechType === "Print Page")
	printerBar.place (File(Folder(['WK/z_common/SWOP proofbar.pdf'])), false);
//printerBar.place (File(Folder.desktop +'/Mech/SWOP proofbar.pdf'), false);

else if (mechType === "Spread")
	printerBar.place (File(Folder(['WK/z_common/SWOP proofbar.pdf'])), false);
//printerBar.place (File(Folder.desktop +'/Mech/SWOP proofbar.pdf'), false);

else if (mechType === "Newspaper")
	printerBar.place (File(Folder(['WK/z_common/SNAP proofbar.pdf'])), false);
//printerBar.place (File(Folder.desktop +'/Mech/SNAP proofbar.pdf'), false);

else if (mechType === "Bus Shelter")
	printerBar.place (File(Folder(['WK/z_common/GRACoL proofbar.pdf'])), false);
//printerBar.place (File(Folder.desktop +'/Mech/GRACoLproofbar.pdf'), false);

else if (mechType === "OOH Bulletin")
	printerBar.place (File(Folder(['WK/z_common/GRACoL proofbar.pdf'])), false);
//printerBar.place (File(Folder.desktop +'/Mech/GRACoLproofbar.pdf'), false);

else if (mechType === "Column")
	printerBar.place (File(Folder(['WK/z_common/GRACoL proofbar.pdf'])), false);
//printerBar.place (File(Folder.desktop +'/Mech/GRACoLproofbar.pdf'), false);





printerBar.fit (FitOptions.CONTENT_TO_FRAME);
printerBar.fit (FitOptions.PROPORTIONALLY);
printerBar.fit (FitOptions.CENTER_CONTENT);



// Draw the rectangle for the W + K Logo
var WK = myPage.rectangles.add(myDocument.layers.item("Crops Legend"));
WK.geometricBounds = [trimHeight + bleedBottom + oneInch * .687, trimWidth - oneInch * .6583, trimHeight + bleedBottom + oneInch * .687 + oneInch * .3069, trimWidth];

WK.place (File(Folder(['WK/z_common/W+K_Logo.eps'])), false);
//WK.place (File(Folder.desktop+'/Mech/W+K_Logo.eps'), false);
WK.fit (FitOptions.CONTENT_TO_FRAME);
WK.fit (FitOptions.PROPORTIONALLY);
WK.fit (FitOptions.CENTER_CONTENT);





// TRACKING NUMBER

var trackingStyle = {
	fillColor: 'Black',
	fillTint: 10,
};
var trackingTextFrame = myPage.textFrames.add(myDocument.layers.item("Crops Legend"), undefined, undefined, trackingStyle);
trackingTextFrame.geometricBounds = [trimHeight + bleedBottom + oneInch * .687, 0, trimHeight + bleedBottom + oneInch * .687 + oneInch * .125, oneInch * 2.125];

trackingTextFrame.contents = "TRACKING NUMBER ";
trackingTextFrame.parentStory.paragraphs.item(0).pointSize = 5.75;
trackingTextFrame.textFramePreferences.verticalJustification = VerticalJustification.CENTER_ALIGN;


// USAGE
if (mechType === "Column"){
	var usageTextFrame = myPage.textFrames.add(myDocument.layers.item("Crops Legend"))
	usageTextFrame.geometricBounds = [trimHeight + bleedBottom + oneInch * 1.037 + oneInch * .665, 0,trimHeight + bleedBottom + oneInch * 1.037 + oneInch * .665 + oneInch * .0625, oneInch * 8.09];
}

else {
	var usageTextFrame = myPage.textFrames.add(myDocument.layers.item("Crops Legend"));
	usageTextFrame.geometricBounds = [trimHeight + bleedBottom + oneInch * .937 + oneInch * .665, 0,trimHeight + bleedBottom + oneInch * .937 + oneInch * .665 + oneInch * .0625, oneInch * 8.09];
}

usageTextFrame.contents = "USAGE Consult Art Production for usage information.";
usageTextFrame.parentStory.paragraphs.item(0).pointSize = 5.75;




// LEGEND
if (mechType === "Column"){
	var legendTextFrame = myPage.textFrames.add(myDocument.layers.item("Crops Legend"));
	legendTextFrame.geometricBounds = [trimHeight + bleedBottom + oneInch * .937, 0,trimHeight + bleedBottom + oneInch * .937 + oneInch * .685, oneInch * 8.09];
}

else {
	var legendTextFrame = myPage.textFrames.add(myDocument.layers.item("Crops Legend"));
	legendTextFrame.geometricBounds = [trimHeight + bleedBottom + oneInch * .937, 0,trimHeight + bleedBottom + oneInch * .937 + oneInch * .665, oneInch * 8.09];
}






// Check if all bleeds are the same
if (bleedTop == bleedRight && bleedTop == bleedBottom && bleedLeft == bleedRight) {
	var bleedAll = bleedTop + unitQuotes;
}
else{
	var bleedAll = "";
}

// IF Statement here


if (mechType === "Print Page")
	legendTextFrame.contents = "JOB\tn/a\tCD\tn/a\tAE\tn/a\tPUB\tn/a\rTITLE\tn/a\tAD\tn/a\tPP\tn/a\tISSUE\t \rCLIENT\tn/a\tCW\tn/a\tAP\tn/a\tBLEED\t" + bleedAll + "\rFILE\tn/a\tSD\tn/a\tCOLOR\tn/a\tTRIM\t" + trimHeight +unitQuotes + " x " + trimWidth +unitQuotes +"\rOFFICE\tW+K Portland\tSM\tn/a\tPHOTO\tn/a\tSAFETY\t \rECD\tn/a\tPM\tn/a\tDESIGN\tn/a\tDMAX\t ";

else if (mechType === "Spread")
	legendTextFrame.contents = "JOB\tn/a\tCD\tn/a\tAE\tn/a\tPUB\tn/a\rTITLE\tn/a\tAD\tn/a\tPP\tn/a\tISSUE\t \rCLIENT\tn/a\tCW\tn/a\tAP\tn/a\tBLEED\t" + bleedAll + "\rFILE\tn/a\tSD\tn/a\tCOLOR\tn/a\tTRIM\t" + trimHeight +unitQuotes + " x " + trimWidth +unitQuotes +"\rOFFICE\tW+K Portland\tSM\tn/a\tPHOTO\tn/a\tSAFETY\t \rECD\tn/a\tPM\tn/a\tDESIGN\tn/a\tGUTTER\t ";

else if (mechType === "Column")// REWORK
	legendTextFrame.contents = "JOB\tn/a\tAD\tn/a\tAP\tn/a\tFORMAT\tn/a\rTITLE\tn/a\tCW\tn/a\tCOLOR\tn/a\tISSUE\t \rCLIENT\tn/a\tSD\tn/a\tPHOTO\tn/a\tBLEED\t" + bleedAll + "\rFILE\tn/a\tSM\tn/a\tILLUS\tn/a\tTRIM\t" + trimHeight +unitQuotes + " x " + trimWidth +unitQuotes +"\rOFFICE\tW+K Portland\tPM\tn/a\tDESIGN\tn/a\tSAFETY\t \rECD\tn/a\tAE\tn/a\tPAPER\tn/a\tDMAX\t \rCD\tn/a\tPP\tn/a\tINK\tn/a\t\t ";

else if (mechType === "Newspaper")
	legendTextFrame.contents = "JOB\tn/a\tCD\tn/a\tAE\tn/a\tPAPER\tn/a\rTITLE\tn/a\tAD\tn/a\tAP\tn/a\tISSUE\t \rCLIENT\tn/a\tCW\tn/a\tILLUS\tn/a\tLIVE\t \rFILE\tn/a\tSD\tn/a\tCOLOR\tn/a\tGUTTER\tn/a\rOFFICE\tW+K Portland\tSM\tn/a\tPHOTO\tn/a\tDMAX\tn/a\rECD\tn/a\tPM\tn/a\tDESIGN\tn/a\t \t ";

else if (mechType === "Bus Shelter")
	legendTextFrame.contents = "JOB\tn/a\tCD\tn/a\tAE\tn/a\tLOCATION\tn/a\rTITLE\tn/a\tAD\tn/a\tPP\tn/a\tTRIM\t" + trimHeight +unitQuotes + " x " + trimWidth +unitQuotes +"\rCLIENT\tn/a\tCW\tn/a\tAP\tn/a\tSAFETY\t \rFILE\tn/a\tSD\tn/a\tCOLOR\tn/a\tVIEWING\tn/a\rOFFICE\tW+K Portland\tSM\tn/a\tPHOTO\tn/a\tACTUAL\tn/a\rECD\tn/a\tPM\tn/a\tDESIGN\tn/a\tSCALE\t ";

else if (mechType === "OOH Bulletin")
	legendTextFrame.contents = "JOB\tn/a\tCD\tn/a\tAE\tn/a\tLOCATION\tn/a\rTITLE\tn/a\tAD\tn/a\tPP\tn/a\tTRIM\t" + trimHeight +unitQuotes + " x " + trimWidth +unitQuotes +"\rCLIENT\tn/a\tCW\tn/a\tAP\tn/a\tBLEED\t" + bleedAll + "\rFILE\tn/a\tSD\tn/a\tCOLOR\tn/a\tACTUAL\tn/a\rOFFICE\tW+K Portland\tSM\tn/a\tPHOTO\tn/a\tSCALE\tn/a\rECD\tn/a\tPM\tn/a\tDESIGN\tn/a\t \t ";




var myText = legendTextFrame.parentStory.texts.item(0);
myText.pointSize = 5.75;
myText.tracking = 25;

// Converts the legend to a table
var myTable = myText.convertToTable("\t","\r");
myTable.cells.everyItem().leftEdgeStrokeWeight = 0;
myTable.cells.everyItem().rightEdgeStrokeWeight = 0;
myTable.cells.everyItem().topEdgeStrokeWeight = 0;
myTable.cells.everyItem().bottomEdgeStrokeWeight = 0;

// Sets the heights
myTable.cells.everyItem().height = oneInch * .02;
myTable.cells.everyItem().topInset = oneInch * .02;
myTable.cells.everyItem().bottomInset = oneInch * .02;

// Sets the width for the smaller columns
myTable.columns.item(0).width = oneInch * .4;
myTable.columns.item(2).width = oneInch * .3;
myTable.columns.item(4).width = oneInch * .5;
myTable.columns.item(6).width = oneInch * .55;


// Sets the widths for the names columns
myTable.columns.item(1).width = oneInch * 1.6;
myTable.columns.item(3).width = oneInch * 1.6;
myTable.columns.item(5).width = oneInch * 1.6;
myTable.columns.item(7).width = oneInch * 1.6;




// Approval Table
var approvalTextFrame = myPage.textFrames.add(myDocument.layers.item("Approvals"));
approvalTextFrame.geometricBounds = [trimHeight + slugBottom - oneInch * .5 - oneInch * .7535, 0,trimHeight + slugBottom - oneInch * .5, oneInch * 8.09];


// Insert Approvals as table 
approvalTextFrame.contents = "\tSIGN\tDATE\t\tSIGN\tDATE\t\tSIGN\tDATE\t\tSIGN\tDATE\t\tSIGN\tDATE\t\tDATE\t\rStudio Designer\t\t\tCreative Director\t\t\tDesigner\t\t\tProject Manager\t\t\tCopyeditor\t\t\t\tTime\t\rStudio Manager\t\t\tCreative Director\t\t\tPrint Producer\t\t\tAccount Exec\t\t\tArt Producer\t\t\t\tMechanical #\t\rArt Director\t\t\tCopywriter\t\t\tRetoucher\t\t\tClient\t\t\tBusiness Affairs\t\t\t\tOutput %\t ";

var approvalText = approvalTextFrame.parentStory.texts.item(0);
approvalText.pointSize = 5.75;
approvalText.tracking = 25;

// Converts the legend to a table
var approvalTable = approvalText.convertToTable("\t","\r");
// Sets up the stroke widths and tint
approvalTable.cells.everyItem().leftEdgeStrokeWeight = .25;
approvalTable.cells.everyItem().rightEdgeStrokeWeight = .25;
approvalTable.cells.everyItem().topEdgeStrokeWeight = 0;
approvalTable.cells.everyItem().bottomEdgeStrokeWeight = 0;
approvalTable.cells.everyItem().bottomEdgeStrokeWeight = .25;

// This seems redundant 
approvalTable.cells.everyItem().bottomEdgeStrokeTint = 70;
approvalTable.cells.everyItem().rightEdgeStrokeTint = 70;
approvalTable.cells.everyItem().leftEdgeStrokeTint = 70;
approvalTable.cells.everyItem().topEdgeStrokeTint = 70;

// So does this
approvalTable.columns.item(0).leftEdgeStrokeWeight = 2;
approvalTable.columns.item(3).leftEdgeStrokeWeight = 2;
approvalTable.columns.item(6).leftEdgeStrokeWeight = 2;
approvalTable.columns.item(9).leftEdgeStrokeWeight = 2;
approvalTable.columns.item(12).leftEdgeStrokeWeight = 2;
approvalTable.columns.item(16).leftEdgeStrokeWeight = 2;

approvalTable.columns.item(15).cells.everyItem().bottomEdgeStrokeWeight = 0;

approvalTable.columns.item(15).leftEdgeStrokeWeight = 2;

approvalTable.columns.item(17).rightEdgeStrokeWeight = 2;

approvalTable.columns.item(15).leftEdgeStrokeWeight = 2;


// This clears the top rows of strokes
approvalTable.rows.item(0).cells.everyItem().rightEdgeStrokeWeight = 0;
approvalTable.rows.item(0).cells.everyItem().leftEdgeStrokeWeight = 0;

// This adds them back to the last two columns
approvalTable.columns.item(16).leftEdgeStrokeWeight = 2;
approvalTable.columns.item(17).rightEdgeStrokeWeight = 2;

approvalTable.columns.item(16).rightEdgeStrokeWeight = .25;
approvalTable.columns.item(17).leftEdgeStrokeWeight = .25;


approvalTable.columns.item(16).topEdgeStrokeWeight = .25;
approvalTable.columns.item(17).topEdgeStrokeWeight = .25;


//Sets the width for the Titles Columns
approvalTable.columns.item(0).width = oneInch * .70;
approvalTable.columns.item(3).width = oneInch * .70;
approvalTable.columns.item(6).width = oneInch * .70;
approvalTable.columns.item(9).width = oneInch * .70;
approvalTable.columns.item(12).width = oneInch * .70;
approvalTable.columns.item(16).width = oneInch * .70;

// Sets the width for the SIGN/DATE Columns
approvalTable.columns.item(1).width = oneInch * .29;
approvalTable.columns.item(2).width = oneInch * .29;
approvalTable.columns.item(4).width = oneInch * .29;
approvalTable.columns.item(5).width = oneInch * .29;
approvalTable.columns.item(7).width = oneInch * .29;
approvalTable.columns.item(8).width = oneInch * .29;
approvalTable.columns.item(10).width = oneInch * .29;
approvalTable.columns.item(11).width = oneInch * .29;
approvalTable.columns.item(13).width = oneInch * .29;
approvalTable.columns.item(14).width = oneInch * .29;

approvalTable.cells.everyItem().topInset = oneInch * .0625;
approvalTable.cells.everyItem().bottomInset = oneInch * .0625;
approvalTable.cells.everyItem().leftInset = oneInch * .04;
approvalTable.cells.everyItem().rightInset = oneInch * .03;
approvalTable.cells.everyItem().height = oneInch * .1875;

approvalTable.column.item(0).cells.leftInset = 0;


// Sets all fonts to Univers
app.findTextPreferences.pointSize = 5.75;
app.changeTextPreferences.appliedFont = ("Univers LT Std	45 Light");
myDocument.changeText();


}
}


