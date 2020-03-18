import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger.js";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummury";
import axios from '../../axios-orders';
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

// constante global deve ser em maiusculo
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component{

    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios.get("https://react-my-burger-94811.firebaseio.com/ingredients.json")
            .then(response => {
                this.setState({ingredients: response.data})
            })
            .catch(error => this.setState({error: true}));
    }

    updatePurchasable(ingredients){
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            },0);
        this.setState({purchasable: sum > 0});
    }
    
    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        // this.setState({loading: true});
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: 'Lucas Wilde',
        //         address: {
        //             street: 'Test street',
        //             zipCode: '1234',
        //             country: 'Brazil'
        //         },
        //         email: 'teste@test.com'
        //     },
        //     deliveryMethod: 'Fastest'
        // }

        // axios.post('/orders', order)
        //     .then(response => {
        //         this.setState({loading: false, purchasing: false})
        //     })
        //     .catch(error => {
        //         this.setState({loading: false, purchasing: false})
        //     });
        const queryParams = [];
        for (const i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredients[i]));
        }
        const queryString = queryParams.join("&");
        this.props.history.push({
            pathname: "/checkout"
            , search: '?'+ queryString
        });
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = null;

        let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;

        if(this.state.ingredients){
            burger = <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    />
            </Aux>;

            orderSummary = <OrderSummary ingredients={this.state.ingredients}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                price={this.state.totalPrice.toFixed(2)}/>;
        }
        
        if(this.state.loading){
            orderSummary = <Spinner />
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} 
                        modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }

    addIngredientHandler = (type) => {
        console.log("addIngredientHandler");

        let oldCount = this.state.ingredients[type];
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = ++oldCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        this.setState({totalPrice: oldPrice + priceAddition, ingredients: updatedIngredients});
        this.updatePurchasable(updatedIngredients);
    }
    
    removeIngredientHandler = (type) => {
        
        let oldCount = this.state.ingredients[type];
        if(oldCount <= 0 ){
            return;
        }

        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = --oldCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        this.setState({totalPrice: oldPrice - priceDeduction, ingredients: updatedIngredients});
        this.updatePurchasable(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }
    
}

export default withErrorHandler(BurgerBuilder, axios);