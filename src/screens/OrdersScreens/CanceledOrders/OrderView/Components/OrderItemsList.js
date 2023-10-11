import React, { useEffect, useRef, useState } from 'react';
import { View, BackHandler, Text, Image, ScrollView, FlatList } from 'react-native';
import { Store, Languages, Url } from '@common';
import styles from '../styles';

const OrderItemsList = ({items}) => {

    const RenderItem = (item) => {
        return(
            <View>
                <View style={[styles.orderitemcontainer]}>
                    <View style={{flexDirection : 'row', alignItems : 'center'}}>
                        <View style={[styles.orderitemqtyholder]}>
                            <Text style={[styles.subtext, {fontSize : 13}]}>{item.qty}</Text>
                        </View>
                        <Text style={[styles.subtext, {fontSize : 13}]}>{item.food_name}</Text>
                        <FlatList
                            itemDimension={80}
                            staticDimension={300}
                            fixed
                            spacing={5}
                            data={item.addons}
                            key={item => item.id}
                            spacing={3}
                            renderItem={({ item }) => <Text>{item.addon_name}</Text>}
                        />
                    </View>
                    <Text style={[styles.subtext, {fontSize : 13, alignSelf : 'center'}]}>{Languages.Rs}{Number(item.price).toFixed(2)}</Text>
                </View>
            </View>
        );
    }

    return(
        <View style={{marginBottom : 10}}>
            <FlatList
                itemDimension={80}
                staticDimension={300}
                fixed
                spacing={5}
                ItemSeparatorComponent={()=>(<View style={[styles.itemseparator]}/>)}
                data={items}
                key={item => item.id}
                spacing={3}
                renderItem={({ item, index }) => RenderItem(item)}
            />
        </View>
    );
}

export default OrderItemsList;