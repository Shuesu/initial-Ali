import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: props.amount
    };

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';

    const date = this.state.date.toLocaleString();
    this.$rootElement.innerHTML = `${date} - <b>$${this.state.amount}</b>`;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Удалить';
    deleteButton.addEventListener('click', () => props.onDelete(this.state.id));
    this.$rootElement.appendChild(deleteButton);
  }
}
