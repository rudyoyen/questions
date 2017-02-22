What does a doctype do?

	It is a declaration (not a tag like <div>) that tells the browser which standard of HTML or XML to follow. 
	If you use <!DOCTYPE html>, this will tell the browser to use full standards mode of HTML5. If you serve your page as XHTML using the "application/xhtml+xml" MIME type as the content-type in the respone header, you do not need a doctype. 
	According to the XHTML1 standard,  you could use XHTML by declaring a special DOCTYPE. However, no browsers have ever implemented this, and the HTML5 standard has reversed the decision. If your page is sent as text/html, you are not using XHTML.
	Instead, the proper MIME type must be present in the Content-Type HTTP header. If you only put the MIME type into an HTML meta tag like <meta http-equiv=…>, it will be ignored and treated like text/html

What's the difference between full standards mode, almost standards mode and quirks mode?

	These are the three modes used by the layout engines in web browsers. The difference modes are determined by the doctype declaration at the top of the mark up page.
	Quirks mode - emulates nonstandard behavior in Navigator 4 and IE5. This is necessary to support websites that were built
	before the adoption of web standards.
	Full standards mode - the web page has the behavior as described in the HTML5 and CSS3 specficiations
	Almost standards mode - only a small number of quirks are implemented

BD Question - What is the purpose of <meta charset="utf-8">?
	

	It tells the browser what type of character encoding the content should be read in. A character set is a group
	of characters. Character sets are stored in computers and each character is mapped to a unique key. This mapping
	is what is called character encoding. So, when you input text using a keyboard or in some other way, the character 
	encoding maps characters you choose to specific bytes in computer memory, and then to display the text it reads 
	the bytes back into characters.

	UTF-8 is a unicode-based encoding. There are three different types of character encodings, UTF-8, UTF-16, and UTF-32, 
	only UTF-8 should be used for the web. We want to use Unicode becasue it can support many languages and can accommodate
	pages and forms in a mixture of those languages. It also eliminates the need for server-side logic to individually 
	determine the character encoding of each incoming form submission. 

BD Question - What does the browser do when it encounters a script tag? (Parser Blocking)
	
	When the browser encounters a script tag (ie <script> for a JS file), it stops parsing the HTML and executes the contents of the script first. Once finished, it continues parsing the HTML to build the DOM. This is known as "Parser Blocking".

	NOTE, the default nature is for it to stop parsing regardless of whether the script is inline or if it references an external source. 
	Example of inline script:

		<script>
			var greeting = "hello";
		</script>

	Example of script with external reference:

		<script src="my.js"></script>

	There is a slight difference between the two, however. Although parsing is paused in both scenarios, when the browser comes to a script withan exernal source, the browser also must pause and wait for the script to be fetched from the disk, cache, or a remote server which can add tens to thousands of miliseconds of delay to the critical path rendering. The browswer pauses parsing the HTML when it encounters a script because the browser doesn't know whether the JS will have any impact on the DOM so it assumes worst case scenario to be safe - that is does impact the DOM.

	If you don't want it to block the parsing, you need to specify in the script tag as an attribute 'async':

		<script async src="my.js">

	Adding the async keyword to the script tag will tell the browser to continue constructing the DOM while the contents of the script are fetched. NOTE, this only works if the script has an external reference. Adding async to a an inline script will have no effect. 
	BD NOTE - I assume this means the async keyword only allows the fetching of the content to happen asynchronously but the execution of the contents of the JS file will still pause the DOM construction. 


BD Question - What does the browser do when it encounters a style tag? (Render Blocking)

	When the browser encounters a style tag (ie <style> for a CSS file), it stops any script execution or DOM construction until 
	is has finished downloading the CSS and constructing the CSSOM (CSS Object Model). 

	
What's the difference between HTML and XHTML?

	HTML can travel over the network to a browser either in HTML syntax or an XML syntax called XHTML. In the reponse header on a message sent from server to client or client to server, the content-type (MIME type) for HTML is "text/html" and for XHTML it is "application/xml+html".
	XML stands for eXtensible Markup Language. It is a generic markup language specified by W3C and used in IT industry.
	XML tags resemble HTML tags but XML is much more flexible because users can define their own tags so it is more
	like a meta-language.
	XHTML is a stricter (than HTML) XML-like syntax

Are there any problems with serving pages as application/xhtml+xml?

	Internet Explorer 8 and older browsers instead show a download dialog box for unknown file types when they see an XHTML document with the correct XHTML MIME type. Also be aware that many popular JavaScript libraries and developer tools have limited or no support for XHTML.

How do you serve a page with content in multiple languages?
What kind of things must you be wary of when design or developing for multilingual sites?
What are data- attributes good for?
	
	They allow you as the developer to append propriety information to HTML elements that are not visible to the end user. You can store information about element like you would store properties on a JavaScript object. You can also access them in CSS and define CSS styles based on the value of a data attribute. Knockout uses data-bind and ScaleJS created data-class which are custom bindings to HTML elements. One thing to note though, is that the performance of reading data-attributes compared to storing data in JS objects is poor. 

Consider HTML5 as an open web platform. What are the building blocks of HTML5?

	-Video and audio elements (no longer need Flash, Silverlight, etc)
	-Input type attributes (ie datetime shows a calendar)
	-Canvas element and SVG
	-Semantic markup (header, footer, section, summary)
	-JavaScript API
	-Geolocation API
	-Web Worker API
	-Data storage


Describe the difference between a cookie, sessionStorage and localStorage.
Describe the difference between <script>, <script async> and <script defer>.
Why is it generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before </body>? Do you know any exceptions?
	

What is progressive rendering?



Have you used different HTML templating languages before?


BD Question - How does CSS and JS get loaded? What is the priority when the browser encounters each?
	
	When the browser encounters a script tag, it stops parsing the HTML and executes the contents of the script first. Once finished, it
	continues parsing the HTML to build the DOM.

