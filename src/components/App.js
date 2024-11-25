import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: []
    };

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    this.$total = document.createElement('h1');
    this.$total.className = 'total-amount';
    this.$total.innerHTML = `Итого: $<span>${this.state.total}</span>`;
    this.$rootElement.appendChild(this.$total);

    const form = new Form({
      onSubmit: this.onItemCreate.bind(this)
    });
    this.$rootElement.appendChild(form.$rootElement);

    this.donateList = new List({
      onDelete: this.onItemDelete.bind(this)
    });
    this.$rootElement.appendChild(this.donateList.$rootElement);
  }

  onItemCreate(amount) {
    const item = new ListItem({
      amount,
      onDelete: this.onItemDelete.bind(this)
    });
    this.state.donates.push(item);
    this.donateList.addItem(item);
    this.updateTotal(amount);
  }

  onItemDelete(id) {
    const itemIndex = this.state.donates.findIndex(item => item.state.id === id);
    if (itemIndex !== -1) {
      const removedItem = this.state.donates.splice(itemIndex, 1)[0];
      this.donateList.removeItem(removedItem);
      this.updateTotal(-removedItem.state.amount);
    }
  }

  updateTotal(amountChange) {
    this.state.total += amountChange;
    this.$total.querySelector('span').textContent = this.state.total;
  }
}
