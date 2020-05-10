// Generate Link: https://mrcoles.com/bookmarklet/
const data = [
  {
    name: "debugge-css",
    desc: "快速调试 CSS 代码",
    source: `
      !window.isDebugging && (window.isDebugging = false);
      isDebugging ? disableDebugger() : enableDebugger();

      function enableDebugger() {
        document.querySelectorAll("*").forEach((elm) => {
          elm.style.outline =
            "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
        });
        isDebugging = true;
      }

      function disableDebugger() {
        document.querySelectorAll("*").forEach((elm) => {
          elm.style.outline = "none";
        });
        isDebugging = false;
      }
    `,
    code:
      "javascript:(function()%7B!window.isDebugging%20%26%26%20(window.isDebugging%20%3D%20false)%3BisDebugging%20%3F%20disableDebugger()%20%3A%20enableDebugger()%3Bfunction%20enableDebugger()%20%7Bdocument.querySelectorAll(%22*%22).forEach((elm)%20%3D%3E%20%7Belm.style.outline%20%3D%221px%20solid%20%23%22%20%2B%20(~~(Math.random()%20*%20(1%20%3C%3C%2024))).toString(16)%3B%7D)%3BisDebugging%20%3D%20true%3B%7Dfunction%20disableDebugger()%20%7Bdocument.querySelectorAll(%22*%22).forEach((elm)%20%3D%3E%20%7Belm.style.outline%20%3D%20%22none%22%3B%7D)%3BisDebugging%20%3D%20false%3B%7D%7D)()"
  },
  {
    name: "no-translate-code",
    desc: "防止 Google 翻译 <pre> 标签内的内容",
    source: `
      [
        ".js-comment-update",
        "pre",
        '.markdown-body h1',
        '.markdown-body h2',
        '.markdown-body h3',

      ].reduce((acc, curSelector) => {
          const nodeList = document.querySelectorAll(curSelector);
          return [...acc, ...nodeList];
        }, [])
      .forEach((elm) => elm.classList.add("notranslate"));
      console.log("✅ No Translate Class Inject Success!");
    `,
    code:
      "javascript:(function()%7B%5B%22pre%22%2C%22code%22%2C%22h1%22%2C%22h2%22%2C%22h3%22%2C%22.js-comment-update%22%2C'.markdown-body%20h1'%2C'.markdown-body%20h2'%2C'.markdown-body%20h3'%2C%5D.reduce((acc%2C%20curSelector)%20%3D%3E%20%7Bconst%20nodeList%20%3D%20document.querySelectorAll(curSelector)%3Breturn%20%5B...acc%2C%20...nodeList%5D%3B%7D%2C%20%5B%5D).forEach((elm)%20%3D%3E%20elm.classList.add(%22notranslate%22))%3Bconsole.log(%22%E2%9C%85%20No%20Translate%20Class%20Inject%20Success!%22)%7D)()"
  }
];

export default data;
