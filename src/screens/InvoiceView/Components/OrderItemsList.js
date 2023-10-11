import React, { useEffect, useRef, useState } from 'react';
import { View, BackHandler, Text, Image, ScrollView, FlatList } from 'react-native';
import { Store, Languages, Url } from '@common';
import styles from '../styles';

const OrderItemsList = ({items}) => {

    const RenderItem = (item) => {
        const addons = JSON.parse(item.addons);
        return(
            <View>
                <View style={[styles.orderitemcontainer]}>
                    <View style={{flexDirection : 'row', alignItems : 'center'}}>
                        <View style={[styles.orderitemqtyholder]}>
                            <Text style={[styles.subtext, {fontSize : 20}]}>{item.qty}</Text>
                        </View>
                        <View>
                            <Text style={[styles.subtext, {fontSize : 16}]}>{item.food_name}</Text>
                            <Text style={[styles.subtext, {fontSize : 16}]}>({item.type_name})</Text>
                        </View>
                    </View>
                    <Text style={[styles.subtext, {fontSize : 16, alignSelf : 'center'}]}>{Languages.Rs}{Number(item.price).toFixed(2)}</Text>
                </View>
                {item.sku != null ? <Text style={[styles.subtext, {fontSize : 16, marginLeft: 50, marginBottom : 10}]}>Item SKU({item.sku})</Text>:null}
                {addons.length != 0 ?
                <View style={{marginLeft : 50, marginTop : 10}}>
                    <FlatList
                        itemDimension={80}
                        staticDimension={300}
                        fixed
                        spacing={5}
                        data={addons}
                        key={item => item.id}
                        spacing={3}
                        renderItem={({ item }) => 
                            <View style={{flexDirection : 'row', width : '65%',}}>
                                <Text style={[styles.addonitemtext]}>{item.name}</Text>
                                <Text style={[styles.addonitemtext]}>({Languages.Rs}{Number(item.price).toFixed(2)})</Text>
                            </View>
                        }
                    />
                </View>:null}
                {/* {item.note == null || item.note == '' ? null : 
                <>
                    <Text style={[styles.preparingnotestitle]}>{Languages.CustomerPreparationNotes}</Text>
                    <View style={[styles.preparingnotescontainer]}>
                        <Text style={[styles.preparingnotetext]}>{item.note}</Text>
                    </View>
                </>}
                {item.preparing_notes == null || item.note == '' ? null : 
                <>
                    <Text style={[styles.preparingnotestitle]}>{Languages.RestaurantPreparationNotes}</Text>
                    <View style={[styles.preparingnotescontainer]}>
                        <Text style={[styles.preparingnotetext]}>{item.preparing_notes}</Text>
                    </View>
                </>} */}
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