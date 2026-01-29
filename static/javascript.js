let lessons = [[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],[2,15],[2,16],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[4,1],[5,1],[5,2],[5,3],[5,4],[6,1],[6,2],[6,3],[6,4],[6,5],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6]];
var currentlesson = 0;
var loc = 1;
var newsbutton = document.getElementById("news");
var quotesbutton = document.getElementById("quotes");
var plusbutton = document.getElementById("plus");
var shortsbutton = document.getElementById("shorts");
var lessonsbutton = document.getElementById("lessons");
var prophbutton = document.getElementById("prophecies");
var unlearnbutton = document.getElementById("unlearn");
var newsdiv = document.getElementById("newsdiv");
var quotesdiv = document.getElementById("quotesdiv");
var shortsdiv = document.getElementById("shortsdiv");
var lessonsdiv = document.getElementById("lessonsdiv");
var learnprophecydiv = document.getElementById("learnprophecydiv");
var longvideoplayerdiv = document.getElementById("longvideoplayerdiv");
var unlearndiv = document.getElementById("unlearndiv");
var quote_text1 = document.getElementById("quote_text1");
var quote_hr = document.getElementById("quote_hr");
var quote_text2 = document.getElementById("quote_text2");
var quotesource = document.getElementById("quotesource");
var quoteoptions = document.getElementById("quoteoptions");
var quotefavorites = document.getElementById("favorites");
var bookmark_image = document.getElementById("bookmark_image");
var bookmark_image_full = document.getElementById("bookmark_image_full");
var quotes = [];
var randomint = 0;
var quotesourcetoggle = 0;
var days = [];
var day1_1 = document.getElementById("day1_1");
var day1_2 = document.getElementById("day1_2");
var day1_3 = document.getElementById("day1_3");
var day1_4 = document.getElementById("day1_4");
var day1_5 = document.getElementById("day1_5");
var day1_6 = document.getElementById("day1_6");
var day2_1 = document.getElementById("day2_1");
var day2_2 = document.getElementById("day2_2");
var day2_3 = document.getElementById("day2_3");
var day2_4 = document.getElementById("day2_4");
var day2_5 = document.getElementById("day2_5");
var day2_6 = document.getElementById("day2_6");
var day2_7 = document.getElementById("day2_7");
var day2_8 = document.getElementById("day2_8");
var day2_9 = document.getElementById("day2_9");
var day2_10 = document.getElementById("day2_10");
var day2_11 = document.getElementById("day2_11");
var day2_12 = document.getElementById("day2_12");
var day2_13 = document.getElementById("day2_13");
var day2_14 = document.getElementById("day2_14");
var day2_15 = document.getElementById("day2_15");
var day2_16 = document.getElementById("day2_16");
var day3_1 = document.getElementById("day3_1");
var day3_2 = document.getElementById("day3_2");
var day3_3 = document.getElementById("day3_3");
var day3_4 = document.getElementById("day3_4");
var day3_5 = document.getElementById("day3_5");
var day3_6 = document.getElementById("day3_6");
var day3_7 = document.getElementById("day3_7");
var day4_1 = document.getElementById("day4_1");
var day5_1 = document.getElementById("day5_1");
var day5_2 = document.getElementById("day5_2");
var day5_3 = document.getElementById("day5_3");
var day5_4 = document.getElementById("day5_4");
var day6_1 = document.getElementById("day6_1");
var day6_2 = document.getElementById("day6_2");
var day6_3 = document.getElementById("day6_3");
var day6_4 = document.getElementById("day6_4");
var day6_5 = document.getElementById("day6_5");
var day7_1 = document.getElementById("day7_1");
var day7_2 = document.getElementById("day7_2");
var day7_3 = document.getElementById("day7_3");
var day7_4 = document.getElementById("day7_4");
var day7_5 = document.getElementById("day7_5");
var day7_6 = document.getElementById("day7_6");
var prophwalkimg1 = document.getElementById("prophwalkimg1");
var prophwalkimg2 = document.getElementById("prophwalkimg2");
var prophwalkimg3 = document.getElementById("prophwalkimg3");
var prophwalkimg4 = document.getElementById("prophwalkimg4");
var prophwalkimg5 = document.getElementById("prophwalkimg5");
var prophwalkimg6 = document.getElementById("prophwalkimg6");
var prophwalkimg7 = document.getElementById("prophwalkimg7");
var prophwalkimg8 = document.getElementById("prophwalkimg8");
var evolution = document.getElementById("evolution");
var player = videojs('my-video');
var longvideoplayerc = document.getElementById("longvideoplayerc");
makedays();

function makedays()
{
    days.push(day1_1);
    days.push(day1_2);
    days.push(day1_3);
    days.push(day1_4);
    days.push(day1_5);
    days.push(day1_6);
    days.push(day2_1);
    days.push(day2_2);
    days.push(day2_3);
    days.push(day2_4);
    days.push(day2_5);
    days.push(day2_6);
    days.push(day2_7);
    days.push(day2_8);
    days.push(day2_9);
    days.push(day2_10);
    days.push(day2_11);
    days.push(day2_12);
    days.push(day2_13);
    days.push(day2_14);
    days.push(day2_15);
    days.push(day2_16);
    days.push(day3_1);
    days.push(day3_2);
    days.push(day3_3);
    days.push(day3_4);
    days.push(day3_5);
    days.push(day3_6);
    days.push(day3_7);
    days.push(day4_1);
    days.push(day5_1);
    days.push(day5_2);
    days.push(day5_3);
    days.push(day5_4);
    days.push(day6_1);
    days.push(day6_2);
    days.push(day6_3);
    days.push(day6_4);
    days.push(day6_5);
    days.push(day7_1);
    days.push(day7_2);
    days.push(day7_3);
    days.push(day7_4);
    days.push(day7_5);
    days.push(day7_6);
}

function httpGetproph(day,number)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "/api/prophecylessons/"+day.toString(), false);
    xmlHttp.send( null );
    const obj = JSON.parse(xmlHttp.responseText);
    return obj[number].videourl;
}

function httpGetunlearn()
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "api/unlearn/1", false);
    xmlHttp.send( null );
    const obj = JSON.parse(xmlHttp.responseText);
    return obj[0].videourl;
}

function httpGetquote(category)
{
    var sub = category;
    if(category == 4)
    {
        category = 0;
    }
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "/api/quote/"+category.toString(), false);
    xmlHttp.send( null );
    const obj = JSON.parse(xmlHttp.responseText);
    var tempobj = [];
    if(sub == 4)
    {
        var cookiearr = cookiemonster.get('quotefavorites');
        for(var i=0;i<obj.length;i++)
        {
            if(cookiearr.includes(obj[i].id.toString()))
            {
                tempobj.push(obj[i]);
            }
        }
        return tempobj;
    }
    return obj;
}

function locklessons()
{
    try
    {
        var tempcurles = cookiemonster.get('currentlesson');
        if(Number(tempcurles) == 0)
        {
            for(let i = 1; i<days.length; i++)
            {
                days[i].children[0].children[0].setAttribute('fill',"#8e8e90");
                days[i].children[2].style.display = 'block';
            }
        }
        else if(Number(tempcurles) == 1)
        {
            for(let i = 0; i<Number(tempcurles); i++)
            {
                days[i].children[0].children[0].setAttribute('fill',"#FFFFFF");
                days[i].children[2].style.display = 'none';
            }
            days[1].children[0].children[0].setAttribute('fill',"#00d2ff");
            days[2].children[0].children[0].setAttribute('fill',"#00d2ff");
            days[1].children[2].style.display = 'none';
            days[2].children[2].style.display = 'none';
            for(let i = Number(tempcurles)+2; i<days.length; i++)
            {
				days[i].children[0].children[0].setAttribute('fill',"#8e8e90");
                days[i].children[2].style.display = 'block';
            }
        }
        else if(Number(tempcurles) == 3)
        {
            try
            {
		        if(cookiemonster.get('secondlesson') == 'true')
		        {
				    for(let i = 0; i<Number(tempcurles); i++)
				    {
				        days[i].children[0].children[0].setAttribute('fill',"#FFFFFF");
				        days[i].children[2].style.display = 'none';
				    }
				    days[Number(tempcurles)].children[0].children[0].setAttribute('fill',"#00d2ff");
				    days[Number(tempcurles)].children[2].style.display = 'none';
				    for(let i = Number(tempcurles)+1; i<days.length; i++)
				    {
						days[i].children[0].children[0].setAttribute('fill',"#8e8e90");
				        days[i].children[2].style.display = 'block';
				    }
				}
				else
				{
				    for(let i = 0; i<Number(tempcurles)-2; i++)
				    {
				        days[i].children[0].children[0].setAttribute('fill',"#FFFFFF");
				        days[i].children[2].style.display = 'none';
				    }
				    days[Number(tempcurles)-2].children[0].children[0].setAttribute('fill',"#00d2ff");
					days[Number(tempcurles)-2].children[2].style.display = 'none';
				    days[Number(tempcurles)-1].children[0].children[0].setAttribute('fill',"#FFFFFF");
					days[Number(tempcurles)-1].children[2].style.display = 'none';
				    for(let i = Number(tempcurles); i<days.length; i++)
				    {
						days[i].children[0].children[0].setAttribute('fill',"#8e8e90");
				        days[i].children[2].style.display = 'block';
				    }
				}
			}
			catch(err)
			{
			    for(let i = 0; i<Number(tempcurles)-2; i++)
		        {
		            days[i].children[0].children[0].setAttribute('fill',"#FFFFFF");
		            days[i].children[2].style.display = 'none';
		        }
		        days[Number(tempcurles)-2].children[0].children[0].setAttribute('fill',"#00d2ff");
				days[Number(tempcurles)-2].children[2].style.display = 'none';
		        days[Number(tempcurles)-1].children[0].children[0].setAttribute('fill',"#FFFFFF");
				days[Number(tempcurles)-1].children[2].style.display = 'none';
		        for(let i = Number(tempcurles); i<days.length; i++)
		        {
					days[i].children[0].children[0].setAttribute('fill',"#8e8e90");
		            days[i].children[2].style.display = 'block';
		        }
			}
        }
        else if(Number(tempcurles) == 11)
        {
            for(let i = 0; i<Number(tempcurles); i++)
            {
                days[i].children[0].children[0].setAttribute('fill',"#FFFFFF");
                days[i].children[2].style.display = 'none';
            }
            days[11].children[0].children[0].setAttribute('fill',"#00d2ff");
            days[12].children[0].children[0].setAttribute('fill',"#00d2ff");
            days[11].children[2].style.display = 'none';
            days[12].children[2].style.display = 'none';
            for(let i = Number(tempcurles)+2; i<days.length; i++)
            {
				days[i].children[0].children[0].setAttribute('fill',"#8e8e90");
                days[i].children[2].style.display = 'block';
            }
        }
        else if(Number(tempcurles) == 13)
        {
            try
            {
		        if(cookiemonster.get('twelvelesson') == 'true')
		        {
				    for(let i = 0; i<Number(tempcurles); i++)
				    {
				        days[i].children[0].children[0].setAttribute('fill',"#FFFFFF");
				        days[i].children[2].style.display = 'none';
				    }
				    days[Number(tempcurles)].children[0].children[0].setAttribute('fill',"#00d2ff");
				    days[Number(tempcurles)].children[2].style.display = 'none';
				    days[Number(tempcurles)+1].children[0].children[0].setAttribute('fill',"#00d2ff");
				    days[Number(tempcurles)+1].children[2].style.display = 'none';
				    for(let i = Number(tempcurles)+2; i<days.length; i++)
				    {
						days[i].children[0].children[0].setAttribute('fill',"#8e8e90");
				        days[i].children[2].style.display = 'block';
				    }
				}
				else
				{
				    for(let i = 0; i<Number(tempcurles)-2; i++)
				    {
				        days[i].children[0].children[0].setAttribute('fill',"#FFFFFF");
				        days[i].children[2].style.display = 'none';
				    }
				    days[Number(tempcurles)-2].children[0].children[0].setAttribute('fill',"#00d2ff");
					days[Number(tempcurles)-2].children[2].style.display = 'none';
				    days[Number(tempcurles)-1].children[0].children[0].setAttribute('fill',"#FFFFFF");
					days[Number(tempcurles)-1].children[2].style.display = 'none';
				    for(let i = Number(tempcurles); i<days.length; i++)
				    {
						days[i].children[0].children[0].setAttribute('fill',"#8e8e90");
				        days[i].children[2].style.display = 'block';
				    }
				}
			}
			catch(err)
			{
			    for(let i = 0; i<Number(tempcurles)-2; i++)
		        {
		            days[i].children[0].children[0].setAttribute('fill',"#FFFFFF");
		            days[i].children[2].style.display = 'none';
		        }
		        days[Number(tempcurles)-2].children[0].children[0].setAttribute('fill',"#00d2ff");
				days[Number(tempcurles)-2].children[2].style.display = 'none';
		        days[Number(tempcurles)-1].children[0].children[0].setAttribute('fill',"#FFFFFF");
				days[Number(tempcurles)-1].children[2].style.display = 'none';
		        for(let i = Number(tempcurles); i<days.length; i++)
		        {
					days[i].children[0].children[0].setAttribute('fill',"#8e8e90");
		            days[i].children[2].style.display = 'block';
		        }
			}
        }
        else if(Number(tempcurles) == 15)
        {
            try
            {
		        if(cookiemonster.get('fourteen') == 'true')
		        {
				    for(let i = 0; i<Number(tempcurles); i++)
				    {
				        days[i].children[0].children[0].setAttribute('fill',"#FFFFFF");
				        days[i].children[2].style.display = 'none';
				    }
				    days[Number(tempcurles)].children[0].children[0].setAttribute('fill',"#00d2ff");
				    days[Number(tempcurles)].children[2].style.display = 'none';
				    for(let i = Number(tempcurles)+1; i<days.length; i++)
				    {
						days[i].children[0].children[0].setAttribute('fill',"#8e8e90");
				        days[i].children[2].style.display = 'block';
				    }
				}
				else
				{
				    for(let i = 0; i<Number(tempcurles)-2; i++)
				    {
				        days[i].children[0].children[0].setAttribute('fill',"#FFFFFF");
				        days[i].children[2].style.display = 'none';
				    }
				    days[Number(tempcurles)-2].children[0].children[0].setAttribute('fill',"#00d2ff");
					days[Number(tempcurles)-2].children[2].style.display = 'none';
				    days[Number(tempcurles)-1].children[0].children[0].setAttribute('fill',"#FFFFFF");
					days[Number(tempcurles)-1].children[2].style.display = 'none';
				    for(let i = Number(tempcurles); i<days.length; i++)
				    {
						days[i].children[0].children[0].setAttribute('fill',"#8e8e90");
				        days[i].children[2].style.display = 'block';
				    }
				}
			}
			catch(err)
			{
			    for(let i = 0; i<Number(tempcurles)-2; i++)
		        {
		            days[i].children[0].children[0].setAttribute('fill',"#FFFFFF");
		            days[i].children[2].style.display = 'none';
		        }
		        days[Number(tempcurles)-2].children[0].children[0].setAttribute('fill',"#00d2ff");
				days[Number(tempcurles)-2].children[2].style.display = 'none';
		        days[Number(tempcurles)-1].children[0].children[0].setAttribute('fill',"#FFFFFF");
				days[Number(tempcurles)-1].children[2].style.display = 'none';
		        for(let i = Number(tempcurles); i<days.length; i++)
		        {
					days[i].children[0].children[0].setAttribute('fill',"#8e8e90");
		            days[i].children[2].style.display = 'block';
		        }
			}
        }
        else if(Number(tempcurles) == 45)
        {
            for(let i = 0; i<Number(tempcurles); i++)
            {
                days[i].children[0].children[0].setAttribute('fill',"#FFFFFF");
                days[i].children[2].style.display = 'none';
            }
        }
        else
        {
            for(let i = 0; i<Number(tempcurles); i++)
            {
                days[i].children[0].children[0].setAttribute('fill',"#FFFFFF");
                days[i].children[2].style.display = 'none';
            }
            days[Number(tempcurles)].children[0].children[0].setAttribute('fill',"#00d2ff");
            days[Number(tempcurles)].children[2].style.display = 'none';
            for(let i = Number(tempcurles)+1; i<days.length; i++)
            {
				days[i].children[0].children[0].setAttribute('fill',"#8e8e90");
                days[i].children[2].style.display = 'block';
            }
        }
    }
    catch(err)
    {
        for(let i = 1; i<days.length; i++)
        {
            days[i].children[0].children[0].setAttribute('fill',"#8e8e90");
            days[i].children[2].style.display = 'block';
        }
    }
}

function scrolltolesson()
{
    try
    {
        var tempcurles = cookiemonster.get('currentlesson');
        if(Number(tempcurles) != 45)
        {
            setTimeout(function() {days[Number(tempcurles)].scrollIntoView();},1)
        }
    }
    catch
    {
    
    }
}

function crosswalk()
{
    try
    {
        var level = Number(cookiemonster.get('currentlesson'));
	    if(level < 6)
	    {
	    	prophwalkimg1.style.display = 'block';
	    	prophwalkimg2.style.display = 'none';
	    	prophwalkimg3.style.display = 'none';
	    	prophwalkimg4.style.display = 'none';
	    	prophwalkimg5.style.display = 'none';
	    	prophwalkimg6.style.display = 'none';
	    	prophwalkimg7.style.display = 'none';
	    	prophwalkimg8.style.display = 'none';
	    }
	    else if(level > 5 && level < 22)
	    {
	        prophwalkimg1.style.display = 'none';
	    	prophwalkimg2.style.display = 'block';
	    	prophwalkimg3.style.display = 'none';
	    	prophwalkimg4.style.display = 'none';
	    	prophwalkimg5.style.display = 'none';
	    	prophwalkimg6.style.display = 'none';
	    	prophwalkimg7.style.display = 'none';
	    	prophwalkimg8.style.display = 'none';
	    }
	    else if(level > 21 && level < 29)
	    {
	        prophwalkimg1.style.display = 'none';
	    	prophwalkimg2.style.display = 'none';
	    	prophwalkimg3.style.display = 'block';
	    	prophwalkimg4.style.display = 'none';
	    	prophwalkimg5.style.display = 'none';
	    	prophwalkimg6.style.display = 'none';
	    	prophwalkimg7.style.display = 'none';
	    	prophwalkimg8.style.display = 'none';
	    }
	    else if(level > 28 && level < 30)
	    {
	        prophwalkimg1.style.display = 'none';
	    	prophwalkimg2.style.display = 'none';
	    	prophwalkimg3.style.display = 'none';
	    	prophwalkimg4.style.display = 'block';
	    	prophwalkimg5.style.display = 'none';
	    	prophwalkimg6.style.display = 'none';
	    	prophwalkimg7.style.display = 'none';
	    	prophwalkimg8.style.display = 'none';
	    }
	    else if(level > 29 && level < 34)
	    {
	        prophwalkimg1.style.display = 'none';
	    	prophwalkimg2.style.display = 'none';
	    	prophwalkimg3.style.display = 'none';
	    	prophwalkimg4.style.display = 'none';
	    	prophwalkimg5.style.display = 'block';
	    	prophwalkimg6.style.display = 'none';
	    	prophwalkimg7.style.display = 'none';
	    	prophwalkimg8.style.display = 'none';
	    }
	    else if(level > 33 && level < 39)
	    {
	        prophwalkimg1.style.display = 'none';
	    	prophwalkimg2.style.display = 'none';
	    	prophwalkimg3.style.display = 'none';
	    	prophwalkimg4.style.display = 'none';
	    	prophwalkimg5.style.display = 'none';
	    	prophwalkimg6.style.display = 'block';
	    	prophwalkimg7.style.display = 'none';
	    	prophwalkimg8.style.display = 'none';
	    }
	    else if(level > 38 && level < 45)
	    {
	        prophwalkimg1.style.display = 'none';
	    	prophwalkimg2.style.display = 'none';
	    	prophwalkimg3.style.display = 'none';
	    	prophwalkimg4.style.display = 'none';
	    	prophwalkimg5.style.display = 'none';
	    	prophwalkimg6.style.display = 'none';
	    	prophwalkimg7.style.display = 'block';
	    	prophwalkimg8.style.display = 'none';
	    }
	    else if(level > 44)
	    {
	        prophwalkimg1.style.display = 'none';
	    	prophwalkimg2.style.display = 'none';
	    	prophwalkimg3.style.display = 'none';
	    	prophwalkimg4.style.display = 'none';
	    	prophwalkimg5.style.display = 'none';
	    	prophwalkimg6.style.display = 'none';
	    	prophwalkimg7.style.display = 'none';
	    	prophwalkimg8.style.display = 'block';
	    }
	}
	catch(err)
	{
	    prophwalkimg1.style.display = 'block';
    	prophwalkimg2.style.display = 'none';
    	prophwalkimg3.style.display = 'none';
    	prophwalkimg4.style.display = 'none';
    	prophwalkimg5.style.display = 'none';
    	prophwalkimg6.style.display = 'none';
    	prophwalkimg7.style.display = 'none';
    	prophwalkimg8.style.display = 'none';
	}
}

function deaacti(buttonnumber)
{
	if(buttonnumber == 0)
	{
	    loc = 0;
		newsbutton.classList.add('active');
		quotesbutton.classList.remove('active');
		shortsbutton.classList.remove('active');
		lessonsbutton.classList.remove('active');
		newsdiv.style.display = 'block';
		quotesdiv.style.display = 'none';
		shortsdiv.style.display = 'none';
		lessonsdiv.style.display = 'none';
		learnprophecydiv.style.display = 'none';
		longvideoplayerdiv.style.display = 'none';
		unlearndiv.style.display = 'none';
	}
	else if(buttonnumber == 1)
	{
		loc = 1;
		newsbutton.classList.remove('active');
		quotesbutton.classList.add('active');
		shortsbutton.classList.remove('active');
		lessonsbutton.classList.remove('active');
		newsdiv.style.display = 'none';
		quotesdiv.style.display = 'block';
		shortsdiv.style.display = 'none';
		lessonsdiv.style.display = 'none';
		learnprophecydiv.style.display = 'none';
		longvideoplayerdiv.style.display = 'none';
		unlearndiv.style.display = 'none';
		getquotes();
	}
	else if(buttonnumber == 2)
	{
		loc = 2;
		newsbutton.classList.remove('active');
		quotesbutton.classList.remove('active');
		shortsbutton.classList.add('active');
		lessonsbutton.classList.remove('active');
		newsdiv.style.display = 'none';
		quotesdiv.style.display = 'none';
		shortsdiv.style.display = 'block';
		lessonsdiv.style.display = 'none';
		learnprophecydiv.style.display = 'none';
		longvideoplayerdiv.style.display = 'none';
		unlearndiv.style.display = 'none';
	}
	else if(buttonnumber == 3)
	{
		loc = 3;
		newsbutton.classList.remove('active');
		quotesbutton.classList.remove('active');
		shortsbutton.classList.remove('active');
		lessonsbutton.classList.add('active');
		newsdiv.style.display = 'none';
		quotesdiv.style.display = 'none';
		shortsdiv.style.display = 'none';
		lessonsdiv.style.display = 'block';
		learnprophecydiv.style.display = 'none';
		longvideoplayerdiv.style.display = 'none';
		unlearndiv.style.display = 'none';
		crosswalk();
	}
	else if(buttonnumber == 4)
	{
	    loc = 4;
	    locklessons();
		scrolltolesson();
		newsbutton.classList.remove('active');
		quotesbutton.classList.remove('active');
		shortsbutton.classList.remove('active');
		lessonsbutton.classList.add('active');
		newsdiv.style.display = 'none';
		quotesdiv.style.display = 'none';
		shortsdiv.style.display = 'none';
		lessonsdiv.style.display = 'none';
		learnprophecydiv.style.display = 'block';
		longvideoplayerdiv.style.display = 'none';
		unlearndiv.style.display = 'none';
	}
	else if(buttonnumber == 5)
	{
		loc = 5;
		newsbutton.classList.remove('active');
		quotesbutton.classList.remove('active');
		shortsbutton.classList.remove('active');
		lessonsbutton.classList.add('active');
		newsdiv.style.display = 'none';
		quotesdiv.style.display = 'none';
		shortsdiv.style.display = 'none';
		lessonsdiv.style.display = 'none';
		learnprophecydiv.style.display = 'none';
		longvideoplayerdiv.style.display = 'block';
		unlearndiv.style.display = 'none';
		playvid();
	}
	else if(buttonnumber == 6)
	{
		loc = 6;
		newsbutton.classList.remove('active');
		quotesbutton.classList.remove('active');
		shortsbutton.classList.remove('active');
		lessonsbutton.classList.add('active');
		newsdiv.style.display = 'none';
		quotesdiv.style.display = 'none';
		shortsdiv.style.display = 'none';
		lessonsdiv.style.display = 'none';
		learnprophecydiv.style.display = 'none';
		longvideoplayerdiv.style.display = 'none';
		unlearndiv.style.display = 'block';
	}
	else if(buttonnumber == 7)
	{
		loc = 7;
		newsbutton.classList.remove('active');
		quotesbutton.classList.remove('active');
		shortsbutton.classList.remove('active');
		lessonsbutton.classList.add('active');
		newsdiv.style.display = 'none';
		quotesdiv.style.display = 'none';
		shortsdiv.style.display = 'none';
		lessonsdiv.style.display = 'none';
		learnprophecydiv.style.display = 'none';
		longvideoplayerdiv.style.display = 'block';
		unlearndiv.style.display = 'none';
		playvid2();
	}
}
window.onbeforeunload = function ()
{
    if(loc == 4 || loc == 5 || loc == 6 || loc == 7)
    {
        player.pause();
        deaacti(3);
        return "Για να πάτε πίσω πατήστε παραμονή στη σελίδα";
    }
};
newsbutton.addEventListener("click", e=> {
    player.pause();
	deaacti(0);
});
quotesbutton.addEventListener("click", e=> {
    player.pause();
	deaacti(1);
});
plusbutton.addEventListener("click", e=> {
	if(loc == 1)
	{
	    quote_text1.style.display = 'block';
        quote_hr.style.display = 'block';
	    assignquotes();
	}
});
shortsbutton.addEventListener("click", e=> {
    player.pause();
	deaacti(2);
});
lessonsbutton.addEventListener("click", e=> {
    player.pause();
	deaacti(3);
});
prophbutton.addEventListener("click", e=> {
	deaacti(4);
});
unlearnbutton.addEventListener("click", e=> {
	deaacti(6);
});
quotesource.addEventListener("click", e=> {
    if(quotesourcetoggle == 0)
    {
    	quotesourcetoggle = 1;
        quote_text1.style.display = 'none';
        quote_hr.style.display = 'none';
        quote_text2.innerHTML = quotes[randomint].source.replaceAll("\\n","\r\n");
    }
    else
    {
    	quotesourcetoggle = 0;
        quote_text1.style.display = 'block';
        quote_hr.style.display = 'block';
        quote_text1.innerHTML = quotes[randomint].author.replaceAll("\\n","\r\n");
        quote_text2.innerHTML = quotes[randomint].description.replaceAll("\\n","\r\n");
    }
});
quotefavorites.addEventListener("click", e=> {
    try
    {
		if(cookiemonster.get('quotefavorites').includes(quotes[randomint].id.toString()))
		{
		    bookmark_image.style.display = 'block';
		    bookmark_image_full.style.display = 'none';
		    cookiemonster.set('quotefavorites', cookiemonster.get('quotefavorites').indexOf(quotes[randomint].id.toString()),7300);
		    toastmaker("Διαγράφτηκε");
		}
		else
		{
		    toastmaker("Αποθηκεύτηκε");
		    bookmark_image.style.display = 'none';
		    bookmark_image_full.style.display = 'block';
			try
			{
			  cookiemonster.append('quotefavorites', quotes[randomint].id, 7300);
			}
			catch (error)
			{
			  var curquotetemp = quotes[randomint].id;
			  var newarray = [curquotetemp];
			  cookiemonster.set('quotefavorites', newarray, 7300);
			}
		}
	}
	catch(err)
	{
	    toastmaker("Αποθηκεύτηκε");
	    bookmark_image.style.display = 'none';
	    bookmark_image_full.style.display = 'block';
		try
		{
		  cookiemonster.append('quotefavorites', quotes[randomint].id, 7300);
		}
		catch (error)
		{
		  var curquotetemp = quotes[randomint].id;
		  var newarray = [curquotetemp];
		  cookiemonster.set('quotefavorites', newarray, 7300);
		}
	}
});
function toastmaker(text)
{
    Toastify({
	  text: text,
	  duration: 3000,
	  destination: "",
	  newWindow: false,
	  close: true,
	  gravity: "top", // `top` or `bottom`
	  position: "right", // `left`, `center` or `right`
	  stopOnFocus: true, // Prevents dismissing of toast on hover
	  style: {
		background: "linear-gradient(to right, #00b09b, #96c93d)",
	  },
	  onClick: function(){} // Callback after click
	}).showToast();
}
day1_1.addEventListener("click", e=> {
    currentlesson = 0;
    deaacti(5);
});
day1_2.addEventListener("click", e=> {
    currentlesson = 1;
    if(day1_2.children[2].style.display == 'none')
    {
        deaacti(5);
    }
});
day1_3.addEventListener("click", e=> {
    currentlesson = 2;
    if(day1_3.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day1_4.addEventListener("click", e=> {
    currentlesson = 3;
    if(day1_4.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day1_5.addEventListener("click", e=> {
    currentlesson = 4;
    if(day1_5.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day1_6.addEventListener("click", e=> {
    currentlesson = 5;
    if(day1_6.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day2_1.addEventListener("click", e=> {
    currentlesson = 6;
    if(day2_1.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day2_2.addEventListener("click", e=> {
    currentlesson = 7;
    if(day2_2.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day2_3.addEventListener("click", e=> {
    currentlesson = 8;
    if(day2_3.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day2_4.addEventListener("click", e=> {
    currentlesson = 9;
    if(day2_4.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day2_5.addEventListener("click", e=> {
    currentlesson = 10;
    if(day2_5.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day2_6.addEventListener("click", e=> {
    currentlesson = 11;
    if(day2_6.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day2_7.addEventListener("click", e=> {
    currentlesson = 12;
    if(day2_7.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day2_8.addEventListener("click", e=> {
    currentlesson = 13;
    if(day2_8.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day2_9.addEventListener("click", e=> {
    currentlesson = 14;
    if(day2_9.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day2_10.addEventListener("click", e=> {
    currentlesson = 15;
    if(day2_10.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day2_11.addEventListener("click", e=> {
    currentlesson = 16;
    if(day2_11.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day2_12.addEventListener("click", e=> {
    currentlesson = 17;
    if(day2_12.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day2_13.addEventListener("click", e=> {
    currentlesson = 18;
    if(day2_13.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day2_14.addEventListener("click", e=> {
    currentlesson = 19;
    if(day2_14.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day2_15.addEventListener("click", e=> {
    currentlesson = 20;
    if(day2_15.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day2_16.addEventListener("click", e=> {
    currentlesson = 21;
    if(day2_16.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day3_1.addEventListener("click", e=> {
    currentlesson = 22;
    if(day3_1.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day3_2.addEventListener("click", e=> {
    currentlesson = 23;
    if(day3_2.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day3_3.addEventListener("click", e=> {
    currentlesson = 24;
    if(day3_3.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day3_4.addEventListener("click", e=> {
    currentlesson = 25;
    if(day3_4.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day3_5.addEventListener("click", e=> {
    currentlesson = 26;
    if(day3_5.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day3_6.addEventListener("click", e=> {
    currentlesson = 27;
    if(day3_6.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day3_7.addEventListener("click", e=> {
    currentlesson = 28;
    if(day3_7.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day4_1.addEventListener("click", e=> {
    currentlesson = 29;
    if(day4_1.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day5_1.addEventListener("click", e=> {
    currentlesson = 30;
    if(day5_1.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day5_2.addEventListener("click", e=> {
    currentlesson = 31;
    if(day5_2.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day5_3.addEventListener("click", e=> {
    currentlesson = 32;
    if(day5_3.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day5_4.addEventListener("click", e=> {
    currentlesson = 33;
    if(day5_4.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day6_1.addEventListener("click", e=> {
    currentlesson = 34;
    if(day6_1.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day6_2.addEventListener("click", e=> {
    currentlesson = 35;
    if(day6_2.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day6_3.addEventListener("click", e=> {
    currentlesson = 36;
    if(day6_3.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day6_4.addEventListener("click", e=> {
    currentlesson = 37;
    if(day6_4.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day6_5.addEventListener("click", e=> {
    currentlesson = 38;
    if(day6_5.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day7_1.addEventListener("click", e=> {
    currentlesson = 39;
    if(day7_1.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day7_2.addEventListener("click", e=> {
    currentlesson = 40;
    if(day7_2.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day7_3.addEventListener("click", e=> {
    currentlesson = 41;
    if(day7_3.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day7_4.addEventListener("click", e=> {
    currentlesson = 42;
    if(day7_4.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day7_5.addEventListener("click", e=> {
    currentlesson = 43;
    if(day7_5.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
day7_6.addEventListener("click", e=> {
    currentlesson = 44;
    if(day7_6.children[2].style.display == 'none')
    {
    	deaacti(5);
    }
});
evolution.addEventListener("click", e=> {
    deaacti(7);
});
function playvid2()
{
    ggg = httpGetunlearn();
    player.src({"type": "application/x-mpegURL", "src":ggg});
    player.play();
}

function reinitvideo()
{
    player.dispose();
    var video = document.createElement('video');
    video.id = "my-video";
    video.className="video-js";
    video.preload="auto";
    video.controls="true";
    video.style.position="relative";
    longvideoplayerc.appendChild(video);
    player = videojs('my-video', {controlBar: {pictureInPictureToggle: false}});
    if(screen.width > screen.height)
    {
         player.height(screen.height-150);
    }
    else
    {
        player.width(screen.width)
    }
}

function playvid()
{
    reinitvideo();
    ggg = httpGetproph(lessons[currentlesson][0],lessons[currentlesson][1]-1);
    player.src({"type": "application/x-mpegURL", "src":ggg});
    player.play();
    player.on('ended', function() {
        try
        {
		    if(Number(cookiemonster.get('currentlesson')) < currentlesson+1)
		    {
		    	cookiemonster.set('currentlesson', currentlesson+1, 7300);
		    }
		}
		catch(err)
		{
		    cookiemonster.set('currentlesson', currentlesson+1, 7300);
		}
        if(currentlesson == 1)
        {
            cookiemonster.set('secondlesson', "true", 7300);
            try
			{
				if(cookiemonster.get('thirdlesson') == 'true' && Number(cookiemonster.get('currentlesson')) < 5)
				{
				    currentlesson = currentlesson+2;
					ggg = httpGetproph(lessons[currentlesson][0],lessons[currentlesson][1]-1);
					player.src({"type":"application/x-mpegURL", "src":ggg});
					player.play();
				}
				else
				{
				    currentlesson = currentlesson+1;
					ggg = httpGetproph(lessons[currentlesson][0],lessons[currentlesson][1]-1);
					player.src({"type":"application/x-mpegURL", "src":ggg});
					player.play();
				}
			}
			catch(err)
			{
			    currentlesson = currentlesson+1;
				ggg = httpGetproph(lessons[currentlesson][0],lessons[currentlesson][1]-1);
				player.src({"type":"application/x-mpegURL", "src":ggg});
				player.play();
			}
        }
		else if(currentlesson == 2)
		{
		    cookiemonster.set('thirdlesson', "true", 7300);
			try
			{
				if(cookiemonster.get('secondlesson') == 'true')
				{
				    currentlesson = currentlesson+1;
					ggg = httpGetproph(lessons[currentlesson][0],lessons[currentlesson][1]-1);
					player.src({"type":"application/x-mpegURL", "src":ggg});
					player.play();
				}
				else
				{
				    currentlesson = currentlesson-1;
					ggg = httpGetproph(lessons[currentlesson][0],lessons[currentlesson][1]-1);
					player.src({"type":"application/x-mpegURL", "src":ggg});
					player.play();
				}
			}
			catch(err)
			{
			    currentlesson = currentlesson-1;
				ggg = httpGetproph(lessons[currentlesson][0],lessons[currentlesson][1]-1);
				player.src({"type":"application/x-mpegURL", "src":ggg});
				player.play();
			}
		}
		else if(currentlesson == 11)
        {
            cookiemonster.set('twelvelesson', "true", 7300);
            try
			{
				if(cookiemonster.get('thirdteenlesson') == 'true' && Number(cookiemonster.get('currentlesson')) < 15)
				{
				    currentlesson = currentlesson+2;
					ggg = httpGetproph(lessons[currentlesson][0],lessons[currentlesson][1]-1);
					player.src({"type":"application/x-mpegURL", "src":ggg});
					player.play();
				}
				else
				{
				    currentlesson = currentlesson+1;
					ggg = httpGetproph(lessons[currentlesson][0],lessons[currentlesson][1]-1);
					player.src({"type":"application/x-mpegURL", "src":ggg});
					player.play();
				}
			}
			catch(err)
			{
			    currentlesson = currentlesson+1;
				ggg = httpGetproph(lessons[currentlesson][0],lessons[currentlesson][1]-1);
				player.src({"type":"application/x-mpegURL", "src":ggg});
				player.play();
			}
        }
		else if(currentlesson == 12)
		{
		    cookiemonster.set('thirdteenlesson', "true", 7300);
			try
			{
				if(cookiemonster.get('twelvelesson') == 'true')
				{
				    currentlesson = currentlesson+1;
					ggg = httpGetproph(lessons[currentlesson][0],lessons[currentlesson][1]-1);
					player.src({"type":"application/x-mpegURL", "src":ggg});
					player.play();
				}
				else
				{
				    currentlesson = currentlesson-1;
					ggg = httpGetproph(lessons[currentlesson][0],lessons[currentlesson][1]-1);
					player.src({"type":"application/x-mpegURL", "src":ggg});
					player.play();
				}
			}
			catch(err)
			{
			    currentlesson = currentlesson-1;
				ggg = httpGetproph(lessons[currentlesson][0],lessons[currentlesson][1]-1);
				player.src({"type":"application/x-mpegURL", "src":ggg});
				player.play();
			}
		}
		else if(currentlesson == 13)
        {
            cookiemonster.set('fourteen', "true", 7300);
            try
			{
				if(cookiemonster.get('fifteen') == 'true' && Number(cookiemonster.get('currentlesson')) < 17)
				{
				    currentlesson = currentlesson+2;
					ggg = httpGetproph(lessons[currentlesson][0],lessons[currentlesson][1]-1);
					player.src({"type":"application/x-mpegURL", "src":ggg});
					player.play();
				}
				else
				{
				    currentlesson = currentlesson+1;
					ggg = httpGetproph(lessons[currentlesson][0],lessons[currentlesson][1]-1);
					player.src({"type":"application/x-mpegURL", "src":ggg});
					player.play();
				}
			}
			catch(err)
			{
			    currentlesson = currentlesson+1;
				ggg = httpGetproph(lessons[currentlesson][0],lessons[currentlesson][1]-1);
				player.src({"type":"application/x-mpegURL", "src":ggg});
				player.play();
			}
        }
		else if(currentlesson == 14)
		{
		    cookiemonster.set('fifteen', "true", 7300);
			try
			{
				if(cookiemonster.get('fourteen') == 'true')
				{
				    currentlesson = currentlesson+1;
					ggg = httpGetproph(lessons[currentlesson][0],lessons[currentlesson][1]-1);
					player.src({"type":"application/x-mpegURL", "src":ggg});
					player.play();
				}
				else
				{
				    currentlesson = currentlesson-1;
					ggg = httpGetproph(lessons[currentlesson][0],lessons[currentlesson][1]-1);
					player.src({"type":"application/x-mpegURL", "src":ggg});
					player.play();
				}
			}
			catch(err)
			{
			    currentlesson = currentlesson-1;
				ggg = httpGetproph(lessons[currentlesson][0],lessons[currentlesson][1]-1);
				player.src({"type":"application/x-mpegURL", "src":ggg});
				player.play();
			}
		}
		else
		{
			currentlesson = currentlesson+1;
			ggg = httpGetproph(lessons[currentlesson][0],lessons[currentlesson][1]-1);
			player.src({"type":"application/x-mpegURL", "src":ggg});
			player.play();
		}
    });
}
function quotechange(chosen)
{
    quotes = httpGetquote(chosen);
	assignquotes();
}
function getquotes()
{
	quotes = httpGetquote(0);
	assignquotes();
}
const isSubset = (array1, array2) => array2.every((element) => array1.includes(element));
function assignquotes()
{
	try
	{
	    quotesids = [];
	    for(var i=0; i<quotes.length;i++)
	    {
	        quotesids.push(quotes[i].id.toString());
	    }
	    if(isSubset(cookiemonster.get('quoteviewed'), quotesids))
	    {
	        randomint = getRandomInt(quotes.length);
	        quote_text1.textContent = quotes[randomint].author;
	        quote_text2.textContent = quotes[randomint].description;
	    }
	    else
	    {
	        while(true)
	        {
	            randomint = getRandomInt(quotes.length);
	            if(!(cookiemonster.get('quoteviewed').includes(quotes[randomint].id.toString())))
	            {
	                break;
	            }
	        }
	        quote_text1.textContent = quotes[randomint].author;
	        quote_text2.textContent = quotes[randomint].description;
	        try
			{
			    cookiemonster.append('quoteviewed', quotes[randomint].id, 7300);
			}
			catch (error)
			{
			    var curquotetemp = quotes[randomint].id;
			    var newarray = [curquotetemp];
			    cookiemonster.set('quoteviewed', newarray, 7300);
			}
	    }
	}
	catch(err)
	{
	    randomint = getRandomInt(quotes.length);
	    quote_text1.textContent = quotes[randomint].author;
        quote_text2.textContent = quotes[randomint].description;
        try
		{
		    cookiemonster.append('quoteviewed', quotes[randomint].id, 7300);
		}
		catch (error)
		{
		    var curquotetemp = quotes[randomint].id;
		    var newarray = [curquotetemp];
		    cookiemonster.set('quoteviewed', newarray, 7300);
		}
	}
	try
	{
		if(cookiemonster.get('quotefavorites').includes(quotes[randomint].id.toString()))
		{
			bookmark_image.style.display = 'none';
			bookmark_image_full.style.display = 'block';
		}
		else
		{
			bookmark_image.style.display = 'block';
			bookmark_image_full.style.display = 'none';
		}
	}
	catch(err)
	{
	    bookmark_image.style.display = 'block';
		bookmark_image_full.style.display = 'none';
	}
}
function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}
deaacti(1);
