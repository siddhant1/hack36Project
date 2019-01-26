import React from 'react';
import Card from './Card.jsx';
import CreateCard from './CreateCard';
import Immutable from 'immutable';

class CardContainer extends React.Component {
    constructor() {
      super();
      this.state = {
        cards: [{
          word: 'Jazz',
          description: 'A type of music of black American origin characterized by improvisation, syncopation, and usually a regular or forceful rhythm, emerging at the beginning of the 20th century.',
          priority : 0
        }, {
          word: 'Reggae',
          description: 'Music like Bob Marley, man.',
          priority : 0
        }, {
          word: 'Folk',
          description: 'Music like Bob Dylan, man.',
          priority : 0
        }
      ],
        cardNumber: 0
      };
      this.boundCallback = this.hideCreateCard.bind(this);
      this.boundCreateCard = this.setCard.bind(this);
      this.boundShowPrevCard = this.showPrevCard.bind(this);
      this.boundShowNextCard = this.showNextCard.bind(this);
    }
    componentDidMount(){
        var size=this.state.cards.length;
        // this.state.cards.map(card=>{
        //     this.setState({card.priority] : size})
        // })
        for(let i=0;i<size;i++){
            this.setState({
                [this.state.cards[i].priority] : size
            })
        }
    }
    hideCreateCard() {
      this.setState({showModal: false});
    }
    
    showNextCard() {
      if ((this.state.cardNumber + 1) !== this.state.cards.size) {
        this.setState({cardNumber: this.state.cardNumber + 1});
      }
    }
    
    showPrevCard() {
      if (this.state.cardNumber !== 0) {
        this.setState({cardNumber: this.state.cardNumber - 1});
      }
    }
    
    setCard(card) {
      const newCards = this.state.cards.push(card);
      this.setState({cards: newCards});
    }
    
    
    generateCards() {
      const cards = this.state.cards;
       const cardsList = cards.map((card) => {
          return (
              <React.Fragment>
                <Card 
                    frontContent={card.get('word')}
                    backContent={card.get('description')}
                    showNextCard={this.boundShowNextCard}
                    showPrevCard = {this.boundShowPrevCard}
                    cardNumber={this.state.cardNumber}
                />
                <div className="row">
                    <div className="col-md-6 btn btn-success">Easy</div>
                    <div className="col-md-6 btn btn-danger">Hard</div>
                </div>
            </React.Fragment>
            );
        })
       return(cardsList.toJS()[this.state.cardNumber]); 
    }
    render() {
      return (
        <div>
          <span 
              className='card-container__icon  fa fa-plus' 
              onClick={() => {
                this.setState({showModal: !this.state.showModal});
              }}
            />
          {this.state.showModal 
            ? <CreateCard 
                onShadowClick={this.boundCallback}
                onCreateCard={this.boundCreateCard}
              /> 
            : ''}
          {this.generateCards()}
          <div className='card-container__dots-wrapper'>
            
          </div>
        </div>
     );
    }
  }
export default CardContainer;