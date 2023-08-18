import { useReducer  } from "react" // 복잡한 상태 관리에는  useState 보단 useReducer

const initialState = {  // 나의 상태
    count: 0  // 나의 상태 초깃값
}

// 리듀서 함수는 두 개의 인수를 전달받는다 : 상태, 액션
// 액션이란? 상태를 '어떻게 해달라'는 내용이 담긴 객체
// 리듀서는 로직을 수행한 결과를 반환하고, 이는 새로운 상태가 된다!
const reducer = (state, action) => {
    if(action.type == 'increment'){
        return { count: state.count +1 }
    }    
    else if(action.type == 'decrement'){
        return { count: state.count -1 }
    }
}

const App = () => {
    // 디스패치 : 리듀서에게 액션을 전달하는 함수
    const[state, dispatch] = useReducer(reducer, initialState) // (리듀서함수, 상태)

    return <>
      <h1>{state.count}</h1>
      <button onClick={() => { dispatch({ type: 'decrement' }) }}>-</button>
      <button onClick={() => { dispatch({ type: 'increment' }) }}>+</button>
    </>
}

export default App