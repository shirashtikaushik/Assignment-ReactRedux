import {useSelector, useDispatch} from 'react-redux';
import {actionCreators} from '../Action/Index'
import {bindActionCreators} from 'redux';


export const Shop =()=>{
    const {amount} = useSelector(state =>state)
    const dispatch = useDispatch()
    const {depositMoney}=
    bindActionCreators(actionCreators,dispatch);
    return(
        <div>
            Shop
            <h1>
                Deposit/Withdraw Money
            <br/>
            Amount is {amount}
            </h1>
            <br/>
            <button onClick={()=>dispatch(actionCreators.depositMoney(200))}> + 
            {/* <button onClick={()=>dispatch(depositMoney(200))}> +  */}
            </button>
            Update Balance
            <button className='btn btn-primary'  onClick={()=>dispatch(actionCreators.withdrawmoney(100))}> -

            </button>
        </div>
    );
}