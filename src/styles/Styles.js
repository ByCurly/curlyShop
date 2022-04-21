import {StyleSheet} from 'react-native';
//ffffe0
export const styles = StyleSheet.create({
 container:{
  flex:1,
  backgroundColor:'#ffffe0',   
 },

 sectionStyle: {
    width:'85%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    height: 50,
    borderRadius: 13,
    margin: 10,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    marginLeft:10,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  cardShadow: {
    marginBottom:10,
    marginTop: 12,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'space-around',
    backgroundColor: '#371956',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    shadowColor: '#fff',
    marginBottom: 10,
    elevation: 10,
    borderRadius: 3
  },






  box_product :{
    flex: 1, alignItems: "center", justifyContent: "center", width: 105, height:160, borderColor: '#f0f0f0', borderWidth : 1, margin: 4
  },
 
  box_product_inner:{backgroundColor: "#fff", borderRadius: 10, overflow: "hidden",width:'100%',height:'100%'},
  
  box_product_img :{ height: 80, width: 95, resizeMode: 'contain', margin : 8, marginBottom : 0,},
 
  box_product_inner_cont :{ padding: 10, width: '100%'},
  
  box_product_inner_title:{fontSize : 11},
 
  box_product_inner_title_new:{color: "green", paddingTop: 0, fontSize:12},
 
  box_horizontal_box:{flex: 1, alignItems: "center", justifyContent: "center",  borderColor: '#f0f0f0', borderWidth : 1, margin: 0, marginBottom : 2, marginTop : 2},
  
  box_horizontal_inner:{backgroundColor: "#f0f0f0", width:'100%', borderRadius: 0, overflow: "hidden"},
 
  box_horizontal_img:{  height: 230, width:  150, resizeMode: 'contain', margin : 0, marginBottom : 0},
 
  box_singal:{flex: 1, alignItems: "center", justifyContent: "center",  borderColor: '#f0f0f0', borderWidth : 1, margin: 0},
  
  box_singal_inner:{backgroundColor: "#ccc", width: '100%', borderRadius: 0, overflow: "hidden"},
 
  box_singal_img :{height: 160,  width: '100%', resizeMode: 'contain', margin : 0, marginBottom : 0},
 
  box_product_list :{
   flex: 1,  
   flexDirection: "row",
   flexWrap: "wrap", 
   width:'100%',
   alignItems: "flex-start", borderWidth:1, borderTopWidth:0, borderColor:'#e8e8ed', 
   justifyContent: "flex-start",  
 },
 
 box_product_list_inner:{ backgroundColor: "#fff", borderWidth:0, borderLeftWidth:0, borderTopWidth:0, 
 borderColor: '#ccc' , padding:15, borderStyle: 'dotted', alignItems: "center", justifyContent: "center",  borderRadius: 0 },
 
 box_product_list_img :{ height: 80, width: 950, resizeMode: 'contain', margin : 8, marginBottom : 0},
 
 box_product_list_inner_cont :{ padding: 10, width: '100%', alignItems: "center", justifyContent: "center"},
 
 box_product_list_inner_title:{fontSize : 11},
 
 box_product_list_inner_title_new:{color: "green", paddingTop: 0, fontSize:12},
 
 hedericon: { padding:8, paddingTop:15,},
 
});



  