import React, { useState } from 'react'
import { View, TextInput } from 'react-native'
import Checkbox from '../Checkbox'


import styles from './styles'
const TodoItem = () => {

    const [isChecked, setisChecked] = useState(false)





    return (
        <View style={{ flexDirection: 'row', alignItems: 'center',marginVertical:5 }}>
            {/* Checkbox */}
            <Checkbox isChecked={isChecked} onPress={() => { setisChecked(!isChecked) }} />
            {/* Text input */}
            <TextInput
                style={{
                    flex: 1,
                    fontSize: 20,
                    color: 'white',
                    marginLeft: 12,
                }}
                multiline />
        </View>
    )
}

export default TodoItem
