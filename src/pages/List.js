import React from 'react';

class List extends React.Component {
    //构造
    constructor(props) {
        super(props);
        this.state = {
            dataList: [1, 2, 3],
            maxNum: 3
        }

    }

    render() {
        return (
            <div>
                <ul>
                    {/*插入js代码使用{}*/
                        this.state.dataList.map((valuse, index) => {
                            return <li key={index}>{valuse}</li>
                        })

                    }

                </ul>
                <button onClick={() => {
                    //...展开
                    let maxNum = this.state.maxNum + 1;
                    let newArr = [...this.state.dataList, maxNum];
                    this.setState({
                        dataList: newArr,
                        maxNum:maxNum
                    });

                }}>点我
                </button>
            </div>
        );
    }

}

export default List;