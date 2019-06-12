import React from 'react';
import { connect } from 'dva';


const namespace = "list";
// 说明：第一个回调函数，作用：将page层和model层进行链接，返回modle中的数据
// 并且，将返回的数据，绑定到this.props
// 接收第二个函数，这个函数的作用：将定义的函数绑定到this.props中，调用model层中定义的函数
@connect((state) => {
    return {//赋值变量到this.props
        dataList : state[namespace].data,
        maxNum : state[namespace].maxNum
    }
}, (dispatch) => {
    //赋值函数到this.props
    // dispatch的作用：可以调用model层定义的函数
    return {
        // 将返回的函数，绑定到this.props中
        add : function () {
            dispatch({
                //通过dispatch调用modle中定义的函数,通过type属性，指定函数命名，格式：namespace/函数名
                type : namespace + "/addNewData"
            });
        },
        init : () => {
            dispatch({
                //通过dispatch调用modle中定义的函数,通过type属性，指定函数命名，格式：namespace/函数名
                type : namespace + "/initData"
            });
        }
    }
})
class List extends React.Component {
    componentDidMount(){
        //初始化的操作
        this.props.init();
    }
    //构造
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <ul>
                    {/*插入js代码使用{}*/
                        this.props.dataList.map((valuse, index) => {
                            return <li key={index}>{valuse}</li>
                        })

                    }

                </ul>
                <button onClick={() => {
                    this.props.add();


                }}>点我
                </button>
            </div>
        );
    }

}

export default List;