(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    227: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(271),
        r = n(0),
        i = n.n(r),
        o = n(231),
        l = n(237);
      t.default = function() {
        return i.a.createElement(
          l.a,
          null,
          i.a.createElement("h1", null, "Hi there"),
          i.a.createElement(
            "p",
            null,
            "Welcome to my personal site. Blog posts coming soon:"
          ),
          i.a.createElement(o.StaticQuery, {
            query: "3167429041",
            render: function(e) {
              return i.a.createElement(
                "ul",
                null,
                e.allMarkdownRemark.edges.map(function(e) {
                  return i.a.createElement(
                    "li",
                    { key: e.node.id },
                    e.node.frontmatter.title
                  );
                })
              );
            },
            data: a
          }),
          i.a.createElement(o.Link, { to: "/page-2/" }, "Go to page 2")
        );
      };
    },
    231: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "graphql", function() {
          return g;
        }),
        n.d(t, "StaticQueryContext", function() {
          return m;
        }),
        n.d(t, "StaticQuery", function() {
          return p;
        });
      var a = n(0),
        r = n.n(a),
        i = n(15),
        o = n.n(i),
        l = n(230),
        s = n.n(l);
      n.d(t, "Link", function() {
        return s.a;
      }),
        n.d(t, "withPrefix", function() {
          return l.withPrefix;
        }),
        n.d(t, "navigate", function() {
          return l.navigate;
        }),
        n.d(t, "push", function() {
          return l.push;
        }),
        n.d(t, "replace", function() {
          return l.replace;
        }),
        n.d(t, "navigateTo", function() {
          return l.navigateTo;
        });
      var u = n(232),
        c = n.n(u);
      n.d(t, "PageRenderer", function() {
        return c.a;
      });
      var d = n(49);
      n.d(t, "parsePath", function() {
        return d.a;
      });
      var m = r.a.createContext({}),
        p = function(e) {
          return r.a.createElement(m.Consumer, null, function(t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : r.a.createElement("div", null, "Loading (StaticQuery)");
          });
        };
      function g() {
        throw new Error(
          "It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby."
        );
      }
      p.propTypes = {
        data: o.a.object,
        query: o.a.string.isRequired,
        render: o.a.func,
        children: o.a.func
      };
    },
    232: function(e, t, n) {
      var a;
      e.exports = ((a = n(234)) && a.default) || a;
    },
    233: function(e) {
      e.exports = {
        data: { site: { siteMetadata: { title: "Brian's posts" } } }
      };
    },
    234: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        r = n.n(a),
        i = n(15),
        o = n.n(i),
        l = n(53),
        s = n(1),
        u = function(e) {
          var t = e.location,
            n = s.a.getResourcesForPathname(t.pathname);
          return r.a.createElement(l.a, { location: t, pageResources: n });
        };
      (u.propTypes = {
        location: o.a.shape({ pathname: o.a.string.isRequired }).isRequired
      }),
        (t.default = u);
    },
    235: function(e, t, n) {},
    237: function(e, t, n) {
      "use strict";
      var a = n(233),
        r = n(0),
        i = n.n(r),
        o = n(15),
        l = n.n(o),
        s = n(239),
        u = n.n(s),
        c = n(231),
        d = function(e) {
          var t = e.siteTitle;
          return i.a.createElement(
            "div",
            { style: { background: "rebeccapurple", marginBottom: "1.45rem" } },
            i.a.createElement(
              "div",
              {
                style: {
                  margin: "0 auto",
                  maxWidth: 960,
                  padding: "1.45rem 1.0875rem"
                }
              },
              i.a.createElement(
                "h1",
                { style: { margin: 0 } },
                i.a.createElement(
                  c.Link,
                  {
                    to: "/",
                    style: { color: "white", textDecoration: "none" }
                  },
                  t
                )
              )
            )
          );
        },
        m = (n(235),
        function(e) {
          var t = e.children;
          return (
            e.data,
            i.a.createElement(c.StaticQuery, {
              query: "755544856",
              render: function(e) {
                return i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(
                    u.a,
                    {
                      title: e.site.siteMetadata.title,
                      meta: [
                        { name: "description", content: "Sample" },
                        { name: "keywords", content: "sample, something" }
                      ]
                    },
                    i.a.createElement("html", { lang: "en" })
                  ),
                  i.a.createElement(d, {
                    siteTitle: e.site.siteMetadata.title
                  }),
                  i.a.createElement(
                    "div",
                    {
                      style: {
                        margin: "0 auto",
                        maxWidth: 960,
                        padding: "0px 1.0875rem 1.45rem",
                        paddingTop: 0
                      }
                    },
                    t
                  )
                );
              },
              data: a
            })
          );
        });
      (m.propTypes = { children: l.a.node.isRequired }), (t.a = m);
    },
    271: function(e) {
      e.exports = {
        data: {
          allMarkdownRemark: {
            edges: [
              {
                node: {
                  id:
                    "/Users/brian/workspace/personal/saylerb.github.io/src/pages/2018-8-17-first-post/index.md absPath of file >>> MarkdownRemark",
                  frontmatter: { title: "Hello, Gatsby", date: "2018-08-17" },
                  excerpt:
                    "Hello, Gatsby I'm probably overengineering this blog, but that's okay. This has been a fun\nlearning experience, I get to use a technology…",
                  timeToRead: 1,
                  html:
                    "<h1>Hello, Gatsby</h1>\n<p>I'm probably overengineering this blog, but that's okay. This has been a fun\nlearning experience, I get to use a technology that I like to use (React) while\nalso learning some new ones (GraphQL). Right now I'm writing this post in\nMarkdown, and Gatsby is transforming it into HTML for me! Pretty cool :)</p>"
                }
              }
            ]
          }
        }
      };
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-047e695ab406278c2f39.js.map
