(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{230:function(e,t,a){"use strict";a.r(t);var n=a(273),o=a(0),i=a.n(o),l=a(233),r=a(239);t.default=function(){return i.a.createElement(r.a,null,i.a.createElement("h1",null,"Hi there"),i.a.createElement("p",null,"Welcome to my personal site!"),i.a.createElement(l.StaticQuery,{query:"534343722",render:function(e){return i.a.createElement("ul",null,e.allMarkdownRemark.edges.map(function(e){return i.a.createElement("li",{key:e.node.id},i.a.createElement("span",null,e.node.frontmatter.date," "),i.a.createElement(l.Link,{to:e.node.frontmatter.path},e.node.frontmatter.title))}))},data:n}))}},233:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return h}),a.d(t,"StaticQuery",function(){return g});var n=a(0),o=a.n(n),i=a(15),l=a.n(i),r=a(232),s=a.n(r);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return r.withPrefix}),a.d(t,"navigate",function(){return r.navigate}),a.d(t,"push",function(){return r.push}),a.d(t,"replace",function(){return r.replace}),a.d(t,"navigateTo",function(){return r.navigateTo});var c=a(234),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var d=a(49);a.d(t,"parsePath",function(){return d.a});var h=o.a.createContext({}),g=function(e){return o.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},234:function(e,t,a){var n;e.exports=(n=a(236))&&n.default||n},235:function(e){e.exports={data:{site:{siteMetadata:{title:"Brian's posts"}}}}},236:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(15),l=a.n(i),r=a(53),s=a(1),c=function(e){var t=e.location,a=s.a.getResourcesForPathname(t.pathname);return o.a.createElement(r.a,{location:t,pageResources:a})};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},237:function(e,t,a){},239:function(e,t,a){"use strict";var n=a(235),o=a(0),i=a.n(o),l=a(15),r=a.n(l),s=a(241),c=a.n(s),u=a(233),d=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(u.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},h=(a(237),function(e){var t=e.children;return e.data,i.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:n})});h.propTypes={children:r.a.node.isRequired},t.a=h},273:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"/Users/brian/workspace/personal/saylerb.github.io/src/pages/2018-08-17-hello-gatsby/index.md absPath of file >>> MarkdownRemark",frontmatter:{path:"/hello-gatsby",title:"Hello, Gatsby",date:"2018-08-17"},excerpt:"I'm probably overengineering this blog, but that's okay. This has been a fun\nlearning experience, I get to use a technology that I like to…",timeToRead:1,html:"<p>I'm probably overengineering this blog, but that's okay. This has been a fun\nlearning experience, I get to use a technology that I like to use (React) while\nalso learning some new ones (GraphQL). Right now I'm writing this post in\nMarkdown, and Gatsby is transforming it into HTML for me.</p>\n<p>The Gatbsy documentation is great, and it's easy to get started by walking\nthrough their <a href=\"https://next.gatsbyjs.org/tutorial/\">tutorial</a> and using one of\nthe <a href=\"https://next.gatsbyjs.org/docs/gatsby-starters/\">starters</a>.</p>"}},{node:{id:"/Users/brian/workspace/personal/saylerb.github.io/src/pages/2018-08-26-setting-up-a-new-intellij-project/index.md absPath of file >>> MarkdownRemark",frontmatter:{path:"/set-up-a-new-intellj-project-with-gradle",title:"How to Set Up a New IntelliJ Project with Gradle",date:"2018-08-26"},excerpt:"Step 1: Install things Install IntelliJ CE Download IntelliJ Community Edition and copy to Applications folder. Open, don't import any…",timeToRead:3,html:'<h2>Step 1: Install things</h2>\n<h3>Install IntelliJ CE</h3>\n<ul>\n<li>Download IntelliJ Community Edition and copy to Applications folder.</li>\n<li>Open, don\'t import any settings.</li>\n<li>You can skip the rest of the initial configuration process.</li>\n</ul>\n<h3>Make sure you have Java installed</h3>\n<ul>\n<li>Java 1.8, which is the current version of Java in Long Term\nSupport as of this article, has most of the modern features that\nanyone new to Java will need.</li>\n<li><a href="http://exercism.io/languages/java/installation#mac-os-x">Exercism has a pretty good page for instructions on\ninstallation</a>. If\nyou want to download an older version of Java, you\'ll have to make some\nadjustments to the installation instructions. For example, if you want to\ndownload Java 8 on a Mac with the Homebrew package manager. You can do:</li>\n</ul>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">brew tap caskroom/versions\nbrew cask install java8</code></pre>\n      </div>\n<p>See <a href="https://stackoverflow.com/questions/24342886/how-to-install-java-8-on-mac">this StackOverflow\npost</a>\nfor more details.</p>\n<ul>\n<li>You don\'t need to install Gradle, since IntelliJ has a Gradle wrapper out of\nthe box.</li>\n</ul>\n<h2>Step 2: Create a project</h2>\n<ul>\n<li>When you open up IntelliJ, there should be a dialog that is open.</li>\n<li>Select <strong>Create a Project</strong>.</li>\n<li>The Left panel will show different types of projects. Select <code class="language-text">Gradel</code>.\nGradle is a build tool and dependency manager. Build scripts are written in\nGroovy, a dynamic langauge that feels like a mix of Ruby and Java.</li>\n<li>Select your project SDK in the top drop down menu. The version of Java you\ninstalled should be there.</li>\n<li>\n<p>On the next screen, you\'ll see GroupID, ArtifactID, and Version. These are\nmaven artifacts (Maven is another build tool that uses an XML configuration\nfile) These aren\'t that important to us, but we have to fill them out.</p>\n<ul>\n<li>GroupID - usually identifies the organization/team for a particular\nproject. E.g. <code class="language-text">com.companyname.project</code>. If it\'s a personal project, you\ncan just use your name.</li>\n<li>ArtifactID - the name to give to your jar without a version number. E.g.\n<code class="language-text">MyFirstProject</code>.</li>\n<li>Version - the version number. This would increment with each release if\nyou were distributing the software. e.g. <code class="language-text">1.0</code></li>\n</ul>\n</li>\n<li>On the next screen, make sure to check <code class="language-text">Create separate module per source\nset</code>, and <code class="language-text">Use default gradle wrapper</code>. You can use the Project JVM for\nGradle JVM (the same one you specified earlier)</li>\n<li>On the next screen select the location of the project to save</li>\n<li>It will prompt you that the file is going to be created by IntelliJ, click\nyes.</li>\n<li>Intially, your Gradle build will start syncing.</li>\n</ul>\n<h3>What is the <code class="language-text">build.gradle</code>?</h3>\n<ul>\n<li>In the root of the project, you should see file called <code class="language-text">build.gradle</code> that\nwas generated for you. Gradle makes it really easy to build your project\n(compile your Java source files). It can also do many other things, including\nrunning your tests, and creating a JAR file containing your classes. The\n<code class="language-text">build.gradle</code> file is written in Groovey, a dynamic language that feels like a\nmix of Java and Ruby.</li>\n<li>If you step into the <code class="language-text">build.gradle</code>, you\'ll see that it already has jUnit\nspecified as a dependency, which is great.</li>\n</ul>\n<h3>Things to add to your <code class="language-text">.gitignore</code></h3>\n<p>A simple <code class="language-text">.gitignore</code> for this project could be:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">.idea/\nbuild\n.gradle\n!gradle-wrapper.jar</code></pre>\n      </div>\n<ul>\n<li>Ignoring the <code class="language-text">.idea/</code> directory is optional. JetBrains would probably\nrecomend publishing it, because it contains metadata about your IDE setup\nwhich can be useful for others working on the same team. If you think it\'s valuable\nto publish, by all means go ahead and do it.</li>\n<li>Ignore the <code class="language-text">build</code> directory. This is where gradle will put the compiled Java\nclasses. Since anyone who downloads your source code can build the project\nthemselves, there\'s no need to publish this directory.</li>\n<li>Ignore the <code class="language-text">.gradle</code> directory.</li>\n<li>Don\'t ignore the gradle-wrapper.jar. This can allow anyone to pull the\nproject down and build without having to install Gradle manually.</li>\n</ul>\n<h3>Basic directory structure</h3>\n<p>By default, Gradle expects the following directory structure:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">src\n├── main\n│   └── java\n│       └── hello\n│           └── Hello.java\n└── test\n    └── java\n        └── hello\n            └── HelloTest.java</code></pre>\n      </div>\n<p>And that\'s pretty much it to get started with a new project. The next post will\ndescribe you how to wire up some simple JUnit tests so you can start\ndeveloping TDD-style!</p>'}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-0ac62760db434a648289.js.map