<p align="center">
  <img src="https://i.imgur.com/4hD49XN.jpg" alt="not another 2DO app logo" >
</p>

<a href="http://2do.azurewebsites.net/" target="_blank" rel="noreferrer nopener">Now Online!</a>

<h1><i>not just another</i> 2DO <i>app</i></h1>

<h3>Timeline:</h3>

<p><b>Day Four:</b></p>
<ul>
	<li>Cleaned up the padding and margin to make mobile friendly</li>
	<li>Added button to share completed 2Dos to twitter</li>
	<li>Implemented save to localStorage functionality</li>
</ul>
<p><b>Day Three:</b></p>
<ul>
	<li>Added more UI to the the primary ToDo list component</li>
	<li>Implemented a completed ToDos list</li>
</ul>

<p><b>Day Two:</b></p>
<ul>
	<li>Began work on the main list component</li>
	<li>Added a date picker for saving deadlines</li>
</ul>
<p><b>Day One:</b></p>
<ul>
	<li>Set up version control via GitHub</li>
	<li>Created .NET server</li>
	<li>Set up React SPA</li>
	<li>Implemented theme</li>
	<li>Created landing page</li>
</ul>

<p>
	<i>Saving to localStorage:</i>
</p>

<p align="center">
	<img src="http://g.recordit.co/3kcXDf1sQ4.gif" alt="saving to local storage">
</p>

<p>
<i>That gif may be a bit much for gitHub.  If so, it can be viewed</i> <a href="http://g.recordit.co/3kcXDf1sQ4.gif" target="_blank" rel="noreferrer noopener">HERE</a>.
</p>


<p align="center">
	<img src="http://g.recordit.co/KhGw0Rm12G.gif" alt="twitter share buttons">
</p>

<p align="center">
	<img src="http://g.recordit.co/xONEjQxxsw.gif" alt="Day Three">
</p>
<p>
<i>That gif may be a bit much for gitHub.  If so, it can be viewed</i> <a href="http://g.recordit.co/xONEjQxxsw.gif" target="_blank" rel="noreferrer noopener">HERE</a>.
</p>

<p align="center">
	<img src="http://g.recordit.co/75WEcWLD38.gif" alt="Day Two">
</p>
<p><i>Date Picker (this was a pain):</i></p>
<p align="center">
	<img src="http://g.recordit.co/M1zqawqeIa.gif" alt="Date Picker">
</p>

<h3>Release Features: <i>Considerations</i></h3>

<p>
A future update to this app will allow users to save their 2Do lists. <i>Nerd talk:</i> Currently, lists are saved to the browser�s local storage via React�s state object.  In order to save lists more persistently � beyond one browser session, lists would be saved to the server, or to a cloud database.  Given the architecture of this app, the lists would be sent via an HTTP request to a .NET Core Web API controller where they would then be saved to either a SQL or noSQL database; via the appropriate ORM.
</p>

<h3>Background:</h3>

<p>
First, we received the directions from the client, which requested � more or less � a To Do app created as a Single Page Application. 
</p>

<p>
We began our work by first brainstorming and considering what features we would like to deliver with this app.  An initial idea was to implement OAUTH to allow users to log-in and save their to-do lists with the ability to return to their saved, in-progress To-Do list.  
</p>
<p>
Before we could even consider that, however, we have to think about the potential architecture of the application.  The immediate kneejerk inclination was to implement Create React App (CRA), which would provide the benefit of ReactJS without having to manually configure Babel, Webpack, and related transpiling and bundling tooling.  CRA comes with an internal Node.js development server.  Though CRA has a pipeline for deployment to Heroku, we like to have more hands-on control of the deployment server.  Which would mean that we could: A) Build our own simple Node server for production and work around the dual servers in the development environment, or (among other choices), B) Use .NET and its built-in React template. 
</p>
<p>
We decided to choose option B.  Because of the tight deadline of the project, we decided that legwork involved of setting up a custom Node server, though relatively minor, could take time away from our focus on developing the aesthetic features and business logic essential to the client-side app.  While  CRA has a deployment pipeline to Heroku, it can occasionally become convoluted because of the nature of the two-server setup (the internal CRA server doesn�t deploy, but our custom implemented Node server would), .NET provides a very straight-forward deployment process to Azure that can be published directly from the IDE.  Because of the tight deadline, we decided that the time-saving benefits of option B made it the right choice for this project.  
</p>
<p>
We next designed a simple logo � the one at the top of this page. This logo is intended only for documentation purposes.  Custom fonts and potentially SVG will be used for logos within the app itself.  
</p>
<p>
In brainstorming the architecture, we knew immediately that we desired a landing page which would provide gateway to the primary app.  We are choosing to do all routing on the client-side via React Router (if necessary), or potentially via conditional rendering using traditional switch statements.  
</p>
<p>Actual implementation work began by first establishing a GitHub repository for version control, and creating the new .NET Core 2.2 solution via the Visual Studio 2019 IDE.  
</p>
<p>
For styling, we decided to use implement flexbox via CSS to ensure that the app would dynamically resize per user screen sizes.  We adhered as much as possible to Material design principles as human factors and A/B testing within industry has demonstrated that Material design provides an familiar experience for the user.  The Material-UI React library provides a higher order component that helps maintain theming throughout the app. 
</p>
<p>
Our first step in really building out the app was to set up the color theme.  The withStyles higher order component provided by the Material-UI library is helpful with this, and we used it to set our primary and secondary colors that will be consistent throughout the app. 
</p>
<p>
The withStyles higher order component expects the use of CSS-in-JS for styling, including CSS as JavaScript objects passed as props, and CSS as JavaScipt objects used inline within the JSX.  For items that require animation, we use CSS stylesheets because the browser polyfils become difficult to read as string literals in the JavaScript. 
</p>
<p>We are using FlexBox for dynamic styling as well as 'vw' and 'vh' CSS units, so that font sizes adjust to window resizing.</p>
<p>
After completing the basic design of the landing page, we next tackled the primary business logic of the app � the actual To-Do list.  Depending on time availability, the To-Do list may have many or few features, so the main goal in the initial implementation of the business logic is to create arrays and functions that are easily extensible for future enhancements. 
</p>

<p>
By <i>"we"</i>, I'm referring to <a href="https://bogoodski2019.azurewebsites.net/" target="_blank" rel="noreferrer noopener">ME</a> :)
</p>

