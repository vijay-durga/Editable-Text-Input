import {Component} from 'react'

import './index.css'

class EditableTextInput extends Component {
  state = {
    changingText: '',
    isItSaved: false,
  }

  onChangingInput = event => {
    this.setState({changingText: event.target.value})
  }

  onSavingText = () => {
    const {isItSaved} = this.state
    this.setState({
      isItSaved: !isItSaved,
    })
  }

  render() {
    const {changingText, isItSaved} = this.state

    return (
      <div className="bg-cont">
        <div className="bg-cont-middle">
          <h1 className="heading">Editable Text Input</h1>
          {isItSaved ? (
            <div className="input-cont">
              <p>{changingText}</p>
              <button
                onClick={this.onSavingText}
                type="button"
                className="input-btn"
              >
                Edit
              </button>
            </div>
          ) : (
            <div className="input-cont">
              <input
                type="text"
                onChange={this.onChangingInput}
                className="input"
                value={changingText}
              />
              <button
                onClick={this.onSavingText}
                type="button"
                className="input-btn"
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EditableTextInput
