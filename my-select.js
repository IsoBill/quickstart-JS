// Получаем название компонента из data-атрибута текущего скрипта
const currentScript = document.currentScript;
const componentName = currentScript.dataset.name;

console.log('Загружается компонент:', componentName);

// Определяем веб-компонент
class MySelect extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
            <style>
                .select {
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    background: white;
                    cursor: pointer;
                }
            </style>
            <div class="select">
                <span>Компонент ${componentName} загружен!</span>
            </div>
        `;
  }
}

// Регистрируем веб-компонент с названием из data-атрибута
customElements.define(componentName, MySelect);
