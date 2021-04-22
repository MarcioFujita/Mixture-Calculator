import React from 'react';

class ResinaEpoxi extends React.Component {
  constructor() {
    super();
    this.state = {
      valueResina: '',
      valueCatalisador: '',
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)

  }

  handleChange(event) {
    // const resina = event.target.value / 2;
    event.preventDefault();
    this.setState({
      valueResina: event.target.value
    }, () => {
      this.setState({
        valueCatalisador: this.state.valueResina / 2
      })
    })
    // this.setState = ({ valueCatalisador: resina });
  }

  handleClick() {
    this.setState({ valueResina: '' })
    this.setState({ valueCatalisador: '' })

    
  }

  render() {
    const { valueCatalisador, valueResina } = this.state;
    return(
      <div>
        <label>
          Quantidade de resina:
          <input
            type="number"
            id="qtdResina"
            name="qtdResina"
            onChange={ this.handleChange }
            value={ valueResina }
          />
        </label>
        <label>
          | Quantidade de catalisador:
          <input
            type="number"
            id="qtdCatalisador"
            value={ valueCatalisador }
          />
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Zerar
        </button>
      </div>
    )
  }
}

export default ResinaEpoxi;
