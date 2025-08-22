function L(a,t={},s=[]){return{tag:a,props:t||{},children:Array.isArray(s)?s:[s].filter(Boolean)}}function e(a,t,...s){let n=s.flat().filter(o=>o!=null&&o!==!1);return L(a,t,n)}function v(a){if(typeof a=="string"||typeof a=="number")return document.createTextNode(String(a));if(typeof a.tag=="function")return v(a.tag(a.props));let t=document.createElement(a.tag);return Object.entries(a.props||{}).forEach(([s,n])=>{if(s.startsWith("on")&&typeof n=="function"){let o=s.slice(2).toLowerCase();t.addEventListener(o,n)}else s==="className"?t.className=n:s==="style"&&typeof n=="object"?Object.assign(t.style,n):s!=="children"&&t.setAttribute(s,n)}),a.children.forEach(s=>{t.appendChild(v(s))}),t}function I(a,t,s,n=0){if(!s)a.appendChild(v(t));else if(!t)a.removeChild(a.childNodes[n]);else if(H(t,s))a.replaceChild(v(t),a.childNodes[n]);else if(t.tag){let o=t.children.length,c=s.children.length;for(let l=0;l<o||l<c;l++)I(a.childNodes[n],t.children[l],s.children[l],l)}}function H(a,t){return typeof a!=typeof t||typeof a=="string"&&a!==t||a.tag!==t.tag}var g=null,C=0,d=[];function u(a){let t=C++;d[t]===void 0&&(d[t]=a);let s=n=>{typeof n=="function"?d[t]=n(d[t]):d[t]=n,g&&g.scheduleRender&&g.scheduleRender()};return[d[t],s]}function E(a,t){let s=C++;d[s]===void 0&&(d[s]={dependencies:void 0,cleanup:null});let n=d[s];(!t||!n.dependencies||t.some((c,l)=>c!==n.dependencies[l]))&&(n.cleanup&&n.cleanup(),n.cleanup=a()||null,n.dependencies=t)}function A(a,t){let s=null,n=!1;function o(){C=0;let l=a();s?I(t,l,s):t.appendChild(v(l)),s=l,n=!1}function c(){n||(n=!0,requestAnimationFrame(o))}return g={scheduleRender:c},o(),c}function T(){let[a,t]=u("home"),[s,n]=u(0),[o,c]=u([]),[l,N]=u(""),[b,w]=u(0),[m,k]=u(!1),[p,y]=u("counter"),[S,f]=u(!1);E(()=>{let i=null;return m&&(i=setInterval(()=>{w(r=>r+1)},1e3)),()=>{i&&clearInterval(i)}},[m]);let x=()=>{l.trim()&&(c([...o,{id:Date.now(),text:l,done:!1}]),N(""))},R=i=>{c(o.map(r=>r.id===i?{...r,done:!r.done}:r))},B=i=>{c(o.filter(r=>r.id!==i))},$=i=>{let r=Math.floor(i/60),D=i%60;return`${r.toString().padStart(2,"0")}:${D.toString().padStart(2,"0")}`},P={counter:`import { h, useState } from 'skara-js';

export function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="counter-demo">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}`,todo:`import { h, useState } from 'skara-js';

export function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { 
        id: Date.now(), 
        text: input, 
        done: false 
      }]);
      setInput('');
    }
  };
  
  return (
    <div className="todo-app">
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addTodo()}
      />
      <button onClick={addTodo}>Add</button>
      
      {todos.map(todo => (
        <div key={todo.id}>
          {todo.text}
        </div>
      ))}
    </div>
  );
}`,effect:`import { h, useState, useEffect } from 'skara-js';

export function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);
  
  return (
    <div className="timer">
      <h2>{seconds}s</h2>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
    </div>
  );
}`};return e("div",{className:"app"},e("nav",{className:"navbar glass-card"},e("div",{className:"nav-container"},e("div",{className:"nav-brand"},e("span",{className:"brand-icon"},"\u{1F3DB}\uFE0F"),e("span",{className:"brand-text ancient-text"},"SKARA.JS")),e("div",{className:`nav-menu ${S?"active":""}`},e("button",{className:`nav-link ${a==="home"?"active":""}`,onClick:()=>{t("home"),f(!1)}},"\u{1F3E0} Home"),e("button",{className:`nav-link ${a==="docs"?"active":""}`,onClick:()=>{t("docs"),f(!1)}},"\u{1F4DA} Docs"),e("button",{className:`nav-link ${a==="playground"?"active":""}`,onClick:()=>{t("playground"),f(!1)}},"\u{1F3AE} Playground"),e("a",{href:"https://github.com/skara-js/skara",className:"nav-link external"},"\u{1F517} GitHub")),e("button",{className:"mobile-menu-btn",onClick:()=>f(!S)},S?"\u2715":"\u2630"))),e("main",{className:"main-content"},(()=>{switch(a){case"home":return e("div",null,e("section",{className:"hero-section"},e("div",{className:"hero-content"},e("div",{className:"hero-badge"},e("span",{className:"badge-text"},"\u{1F3DB}\uFE0F Ancient Wisdom \u2022 Modern Power")),e("h1",{className:"hero-title"},"SKARA.JS"),e("p",{className:"hero-subtitle"},"A React-like framework inspired by the ancient stone circles of Skara Brae.",e("br",null),e("span",{className:"ancient-text"},"Built to last through the ages.")),e("div",{className:"hero-buttons"},e("button",{className:"neon-button primary large",onClick:()=>t("docs")},"\u{1F680} Get Started"),e("button",{className:"neon-button secondary large",onClick:()=>t("playground")},"\u{1F3AE} Try It Live"))),e("div",{className:"hero-visual"},e("div",{className:"floating-stones"},e("div",{className:"stone stone-1"},"\u{1F3DB}\uFE0F"),e("div",{className:"stone stone-2"},"\u26A1"),e("div",{className:"stone stone-3"},"\u{1F3A8}"),e("div",{className:"stone stone-4"},"\u{1F680}")))),e("section",{className:"features-section"},e("div",{className:"section-header"},e("h2",{className:"section-title ancient-text"},"Why Choose Skara.js?"),e("p",{className:"section-subtitle"},"Ancient wisdom meets cutting-edge technology")),e("div",{className:"features-grid"},e("div",{className:"feature-card glass-card floating-card"},e("div",{className:"feature-icon"},"\u26A1"),e("h3",null,"Lightning Fast"),e("p",null,"Built with ESBuild for instant compilation and hot reload. Your development experience will be blazing fast."),e("div",{className:"feature-stats"},e("span",{className:"stat"},"~50ms"),e("span",{className:"stat-label"},"Build Time"))),e("div",{className:"feature-card glass-card floating-card"},e("div",{className:"feature-icon"},"\u{1F3A8}"),e("h3",null,"Beautiful Styling"),e("p",null,"Custom .ss files with built-in Tailwind support. Create stunning UIs with our glass morphism design system."),e("div",{className:"feature-stats"},e("span",{className:"stat"},"100%"),e("span",{className:"stat-label"},"Custom"))),e("div",{className:"feature-card glass-card floating-card"},e("div",{className:"feature-icon"},"\u{1F6E0}\uFE0F"),e("h3",null,"Developer Experience"),e("p",null,"Custom file extensions (.ssx, .ss, .sjs), intelligent hot reload, and intuitive API design."),e("div",{className:"feature-stats"},e("span",{className:"stat"},"3"),e("span",{className:"stat-label"},"File Types"))),e("div",{className:"feature-card glass-card floating-card"},e("div",{className:"feature-icon"},"\u{1F3DB}\uFE0F"),e("h3",null,"Ancient Wisdom"),e("p",null,"Inspired by Skara Brae's 5000-year legacy. Built with timeless principles for lasting applications."),e("div",{className:"feature-stats"},e("span",{className:"stat"},"5000"),e("span",{className:"stat-label"},"Years Old"))),e("div",{className:"feature-card glass-card floating-card"},e("div",{className:"feature-icon"},"\u{1F680}"),e("h3",null,"React-like Hooks"),e("p",null,"Familiar useState and useEffect hooks. If you know React, you already know Skara.js."),e("div",{className:"feature-stats"},e("span",{className:"stat"},"100%"),e("span",{className:"stat-label"},"Compatible"))),e("div",{className:"feature-card glass-card floating-card"},e("div",{className:"feature-icon"},"\u{1F4E6}"),e("h3",null,"Complete Ecosystem"),e("p",null,"Framework, dev server, build tools, and project generator. Everything you need in one package."),e("div",{className:"feature-stats"},e("span",{className:"stat"},"All-in-1"),e("span",{className:"stat-label"},"Solution"))))),e("section",{className:"demo-section"},e("div",{className:"section-header"},e("h2",{className:"section-title ancient-text"},"See It In Action"),e("p",{className:"section-subtitle"},"Interactive demos built with Skara.js")),e("div",{className:"demo-grid"},e("div",{className:"demo-card glass-card"},e("h3",{className:"demo-title"},"\u26A1 Reactive Counter"),e("div",{className:"counter-display"},s),e("div",{className:"button-group"},e("button",{className:"neon-button",onClick:()=>n(s-1)},"\u2796"),e("button",{className:"neon-button",onClick:()=>n(s+1)},"\u2795"),e("button",{className:"neon-button red",onClick:()=>n(0)},"\u{1F504}"))),e("div",{className:"demo-card glass-card"},e("h3",{className:"demo-title"},"\u{1F4DD} Smart Todo"),e("div",{className:"todo-demo"},e("div",{className:"flex gap-4 mb-4"},e("input",{type:"text",className:"todo-input",placeholder:"Add a task...",value:l,onChange:i=>N(i.target.value),onKeyPress:i=>i.key==="Enter"&&x(),style:{flex:"1"}}),e("button",{className:"neon-button",onClick:x},"\u2795")),e("div",{className:"todo-list"},o.slice(0,3).map(i=>e("div",{key:i.id,className:"todo-item"},e("span",{onClick:()=>R(i.id),style:{flex:"1",cursor:"pointer",textDecoration:i.done?"line-through":"none",color:i.done?"rgba(255,255,255,0.5)":"white"}},i.done?"\u2705":"\u2B55"," ",i.text),e("button",{onClick:()=>B(i.id),style:{background:"none",border:"none",color:"#ef4444",cursor:"pointer"}},"\u{1F5D1}\uFE0F")))))),e("div",{className:"demo-card glass-card"},e("h3",{className:"demo-title"},"\u23F1\uFE0F Ancient Timer"),e("div",{className:"timer-display"},$(b)),e("div",{className:"progress-bar"},e("div",{className:"progress-fill",style:{width:`${b%60*(100/60)}%`}})),e("div",{className:"button-group"},e("button",{className:`neon-button ${m?"red":"green"}`,onClick:()=>k(!m)},m?"\u23F8\uFE0F":"\u25B6\uFE0F"),e("button",{className:"neon-button gray",onClick:()=>{w(0),k(!1)}},"\u{1F504}"))))));case"docs":return e("div",{className:"docs-section"},e("div",{className:"docs-header"},e("h1",{className:"docs-title ancient-text"},"\u{1F4DA} Documentation"),e("p",{className:"docs-subtitle"},"Everything you need to build with Skara.js")),e("div",{className:"docs-grid"},e("div",{className:"docs-nav glass-card"},e("h3",null,"Quick Navigation"),e("ul",{className:"docs-menu"},e("li",null,e("a",{href:"#installation"},"\u{1F680} Installation")),e("li",null,e("a",{href:"#getting-started"},"\u26A1 Getting Started")),e("li",null,e("a",{href:"#components"},"\u{1F9E9} Components")),e("li",null,e("a",{href:"#hooks"},"\u{1F3A3} Hooks")),e("li",null,e("a",{href:"#styling"},"\u{1F3A8} Styling")),e("li",null,e("a",{href:"#deployment"},"\u{1F4E6} Deployment")))),e("div",{className:"docs-content"},e("div",{className:"docs-card glass-card",id:"installation"},e("h2",null,"\u{1F680} Installation"),e("p",null,"Get started with Skara.js in seconds:"),e("div",{className:"code-block"},e("pre",null,e("code",null,`# Install Skara.js globally
npm install -g skara-js

# Create a new project
skara create my-ancient-app

# Start development server
cd my-ancient-app
skara dev`)))),e("div",{className:"docs-card glass-card",id:"getting-started"},e("h2",null,"\u26A1 Getting Started"),e("p",null,"Create your first Skara.js component:"),e("div",{className:"code-block"},e("pre",null,e("code",null,`// App.ssx
import { h, useState } from 'skara-js';

export function App() {
  const [message, setMessage] = useState('Hello Skara!');
  
  return (
    <div className="app">
      <h1>{message}</h1>
      <button onClick={() => setMessage('Ancient Power!')}>
        Transform
      </button>
    </div>
  );
}`)))),e("div",{className:"docs-card glass-card",id:"components"},e("h2",null,"\u{1F9E9} Components"),e("p",null,"Skara.js components use familiar JSX syntax with .ssx extension:"),e("div",{className:"code-block"},e("pre",null,e("code",null,`// Button.ssx
import { h } from 'skara-js';

export function Button({ children, onClick, variant = 'primary' }) {
  return (
    <button 
      className={\`neon-button \${variant}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// Usage
<Button variant="ancient" onClick={handleClick}>
  \u{1F3DB}\uFE0F Ancient Power
</Button>`)))),e("div",{className:"docs-card glass-card",id:"hooks"},e("h2",null,"\u{1F3A3} Hooks"),e("p",null,"Use React-like hooks for state management:"),e("div",{className:"code-block"},e("pre",null,e("code",null,`import { h, useState, useEffect } from 'skara-js';

export function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('/api/ancient-data')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);
  
  if (loading) return <div>Loading ancient wisdom...</div>;
  
  return <div>{data.message}</div>;
}`)))),e("div",{className:"docs-card glass-card",id:"styling"},e("h2",null,"\u{1F3A8} Styling"),e("p",null,"Use .ss files for enhanced CSS with Tailwind support:"),e("div",{className:"code-block"},e("pre",null,e("code",null,`/* styles.ss */
.ancient-card {
  @apply p-6 rounded-lg;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 25px 50px -12px rgba(139, 92, 246, 0.25);
  }
}

.neon-glow {
  box-shadow: 0 0 20px theme('colors.ancient.400');
}`)))))));case"playground":return e("div",{className:"playground-section"},e("div",{className:"playground-header"},e("h1",{className:"playground-title ancient-text"},"\u{1F3AE} Interactive Playground"),e("p",{className:"playground-subtitle"},"Try Skara.js code live in your browser")),e("div",{className:"playground-container"},e("div",{className:"playground-nav glass-card"},e("h3",null,"Examples"),e("div",{className:"example-buttons"},e("button",{className:`example-btn ${p==="counter"?"active":""}`,onClick:()=>y("counter")},"\u26A1 Counter"),e("button",{className:`example-btn ${p==="todo"?"active":""}`,onClick:()=>y("todo")},"\u{1F4DD} Todo"),e("button",{className:`example-btn ${p==="effect"?"active":""}`,onClick:()=>y("effect")},"\u23F1\uFE0F Timer"))),e("div",{className:"playground-editor glass-card"},e("div",{className:"editor-header"},e("span",{className:"editor-title"},"\u{1F4DD} Code Editor"),e("span",{className:"file-name"},p,".ssx")),e("div",{className:"code-editor"},e("pre",null,e("code",null,P[p])))),e("div",{className:"playground-preview glass-card"},e("div",{className:"preview-header"},e("span",{className:"preview-title"},"\u{1F441}\uFE0F Live Preview"),e("span",{className:"preview-status"},"\u{1F7E2} Running")),e("div",{className:"preview-content"},p==="counter"&&e("div",{className:"preview-demo"},e("h2",{style:{marginBottom:"16px"}},"Count: ",s),e("button",{className:"neon-button",onClick:()=>n(s+1)},"Increase")),p==="todo"&&e("div",{className:"preview-demo"},e("input",{className:"todo-input",value:l,onChange:i=>N(i.target.value),placeholder:"Enter a task...",style:{marginBottom:"16px",width:"100%"}}),e("button",{className:"neon-button",onClick:x},"Add"),e("div",{style:{marginTop:"16px"}},o.slice(0,2).map(i=>e("div",{key:i.id,style:{padding:"8px",background:"rgba(255,255,255,0.1)",margin:"4px 0",borderRadius:"4px"}},i.text)))),p==="effect"&&e("div",{className:"preview-demo"},e("h2",{style:{marginBottom:"16px"}},b,"s"),e("button",{className:`neon-button ${m?"red":"green"}`,onClick:()=>k(!m)},m?"Pause":"Start"))))));default:return e("div",null,"Section not found")}})()),e("footer",{className:"footer"},e("div",{className:"footer-content"},e("div",{className:"footer-section"},e("h4",{className:"ancient-text"},"\u{1F3DB}\uFE0F Skara.js"),e("p",null,"Ancient wisdom meets modern development"),e("div",{className:"social-links"},e("a",{href:"#",className:"social-link"},"\u{1F4E7}"),e("a",{href:"#",className:"social-link"},"\u{1F426}"),e("a",{href:"#",className:"social-link"},"\u{1F4AC}"))),e("div",{className:"footer-section"},e("h4",null,"Resources"),e("ul",null,e("li",null,e("a",{href:"#",onClick:()=>t("docs")},"Documentation")),e("li",null,e("a",{href:"#",onClick:()=>t("playground")},"Playground")),e("li",null,e("a",{href:"#"},"Examples")),e("li",null,e("a",{href:"#"},"Community")))),e("div",{className:"footer-section"},e("h4",null,"Framework"),e("ul",null,e("li",null,e("a",{href:"#"},"Components")),e("li",null,e("a",{href:"#"},"Hooks")),e("li",null,e("a",{href:"#"},"Styling")),e("li",null,e("a",{href:"#"},"Build Tools"))))),e("div",{className:"footer-bottom"},e("p",null,"\xA9 2024 Skara.js \u2022 Built to last through the ages \u2022 Like Skara Brae \u{1F3DB}\uFE0F"))))}var j=document.getElementById("root");j?A(()=>T(),j):console.error("Root element not found");
//# sourceMappingURL=app.js.map
