import { Component } from '../core/Component';

export class List extends Component {
  setup(props) {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    const title = document.createElement('h2');
    title.className = 'donates-container__title';
    title.textContent = 'Список донатов';

    this.$listContainer = document.createElement('div');
    this.$listContainer.className = 'donates-container__donates';

    this.$rootElement.appendChild(title);
    this.$rootElement.appendChild(this.$listContainer);
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement);
  }

  removeItem(item) {
    this.$listContainer.removeChild(item.$rootElement);
  }
}
