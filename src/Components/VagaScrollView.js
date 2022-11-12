import{SafeAreaView,Text,View,ScrollView,StatusBar,Platform,StyleSheet} from 'react-native'

const statusBarHeight = StatusBar.currentHeight;

export default function VagaScrollViews( Conteudo ) {
    return(
    <SafeAreaView style={style.container}>
        <ScrollView>
            <View style={style.content}>
                    <Text>{Conteudo}</Text>
            </View> 
        </ScrollView>
    </SafeAreaView>
    );

}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#040316',
        paddingTop: Platform.OS == 'android' ? statusBarHeight : 25,
    },
    content:{
        alignSelf:'center',
        flex:1,
        width:'98%',
        height: 120,
        marginBottom:20,
        backgroundColor:'#f1f1f1',
        alignItems:'center',
        justifyContent:'center'
    }

    
});