import React from "react";
import {FlatList, Text} from 'react-native'
import VagaScrollView from '../../Components/VagaScrollView'
import DadosTesteVaga from '../../Data/DadosTesteVaga'

export default VagaCtrList =>{

    function getVagaItem({item: vaga})
    {
        return 
        {
           <Text> {vaga.Nome}  </Text>            // VagaScrollView('teste');
        }
    }
    return (
        // VagaScrollView('Pedro teste')
        <view>
            <FlatList
            keyExtractor={vaga => vaga.id.toString()}
            data={DadosTesteVaga}
            renderItem = {getVagaItem}
            />
        </view>
    );
}
