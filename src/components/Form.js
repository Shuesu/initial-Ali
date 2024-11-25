import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.state = {
      amount: ''
    };

    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    const label = document.createElement('label');
    label.className = 'donate-form__input-label';
    label.textContent = 'Введите сумму в $';

    this.$input = document.createElement('input');
    this.$input.className = 'donate-form__donate-input';
    this.$input.type = 'number';
    this.$input.min = '1';
    this.$input.max = '100';
    this.$input.required = true;

    this.$button = document.createElement('button');
    this.$button.className = 'donate-form__submit-button';
    this.$button.type = 'submit';
    this.$button.disabled = true;
    this.$button.textContent = 'Задонатить';

    label.appendChild(this.$input);
    this.$rootElement.appendChild(label);
    this.$rootElement.appendChild(this.$button);

    this.$input.addEventListener('input', this.handleInput.bind(this));
    this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this));
  }

  handleInput(event) {
    this.state.amount = event.target.value;
    this.$button.disabled = !this.isValid;
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid) {
      this.props.onSubmit(Number(this.state.amount));
      this.state.amount = '';
      this.$input.value = '';
      this.$button.disabled = true;
    }
  }

  get isValid() {
    const amount = Number(this.state.amount);
    return amount >= 1 && amount <= 100;
  }
}
