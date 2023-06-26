// add your paths here for components that are loaded inside the markdown render 
// custom render hooks, shortcodes, etc
{{ $youtube := (resources.Get "scripts/youtube-player.js" | resources.Minify) }}
{{ $codemirror := (resources.Get "scripts/cm6.ts"  | js.Build | resources.Minify) }}
{{ $tabs := (resources.Get "scripts/tab-panels.js" | resources.Minify) }}

const paths = {
    mermaid: 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs',
    youtube: "{{ $youtube.Permalink }}",
    codemirror: "{{ $codemirror.Permalink }}",
    tabs: "{{ $tabs.Permalink }}"
};

//dynamically load our various component scripts
// Get all elements with class 'is-dynamic' and then filter to match the module name
[...document.getElementsByClassName('is-dynamic')].flatMap(element => [...element.classList])
.filter(c => c.startsWith('has-')).forEach(className => {
  const componentName = className.slice(4);
  if(paths[componentName]) {
    import(paths[componentName])
      .catch((error) => console.error(`${componentName} script could not be loaded: ${error}`));
  }
});
