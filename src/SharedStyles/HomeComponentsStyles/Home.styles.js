import styled from "styled-components";

export const Parent=styled.div`
margin-top: 30px;
margin-left: 30px;
width: 1184px;

#HeaderTitle{
    color:#212A54;
    font-size: 20px;
    font-weight:600 ;
}

`
export const Wraper=styled.div`
border-radius:10px;
border:1px solid #F1F1F5;
background-color: #FFFFFF;
width:1122px;
margin-top:30px;

`


export const WraperHeader=styled.div`
width: 100%;
height: 58px;
position: relative;

.search{
    width: 314px;
    height: 34px;
    border-radius: 10px;
    border:1px solid #F1F1F5;
    position: absolute;
    left: 30px;
    bottom: 0px;
    display: flex;
    align-items: center;

.searchIcon{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  width: 38px;
  border-right: 1px solid #F1F1F5;
}
input{
    
    border:none;
    outline: none;
    width: 250px;
   padding-left: 20px;
    height: 30px;
}
}
.sort{
    position: absolute;
right: 30px;
bottom: 0px;
display: flex;
align-items: center;
.sortUsers{
    border:1px solid  #F1F1F5;
    border-radius: 10px;
    width: 200px;
    height: 38px;
    position: relative;
}
span{
    color:#696974;
    font-size:14px;
    font-weight: 400;
}
.sortby{
    position: absolute;
    top:10px;
    left:12px;
}
.default{
    position: absolute;
    top:10px;
    left:64px;
    color: #44444F;
}

.downarrowContainer{
    position: absolute;
    top: 0px;
    right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
   height: 38px;
   width: 28px;

   border-left: 1px solid #F1F1F5;
   color: #04B4FF;
}
.btn{
    margin-left:20px;
  button{
      background-color: #04B4FF;
      padding:5px 20px;
      border-radius:10px;
      border:none;
      color:white;
      cursor: pointer;
  }
}
}

/* Transaction */

#Transaction_Add{
    position: absolute;
    top:25px;
    left:367px;
}

#Transaction_Send{
    position: absolute;
    top:25px;
    left:444px;
}

#Transaction_Pay{
    position: absolute;
    top:25px;
    left:528px;
}

#Transaction_Request{
    position: absolute;
    top:25px;
    left:603px;
}

#Transaction_All{
    position: absolute;
    top:25px;
    left:709px;
}

/* WithDrawalList */

#WithdrawalList_Bank_Transfer{
   position :absolute ;
   top:25px;
   left:423px;
}
#WithdrawalList_Cash_Delivery{
    position :absolute ;
   top:25px;
   left:568px;
}

`

export const WraperContent=styled.div`

width: 100%;
height: 58px;
position: relative;

span{
    color:#212A54;
    font-weight: 700;
    font-size:14px;
}
/* Admin */


#Admin_User_Name{
position: absolute;
left:30px;
top:20px;

}
#Admin_Email{
position: absolute;
left:282px;
top:20px;
}
#Admin_Created_At{
position: absolute;
left:534px;
top:20px;
}
#Admin_Role{
position: absolute;
left:710px;
top:20px;
}
#Admin_Action{
position: absolute;
left:863px;
top:20px;
}

/* IndividualUser User Styles */

#IndividualUser_Profile_Image{
position: absolute;
top:20px;
left:29px;
}
#IndividualUser_First_Name{
    position: absolute;
top:20px;
left:160px;

}
#IndividualUser_Last_Name{
    position: absolute;
top:20px;  
left:256px;
}
#IndividualUser_Email{
    position: absolute;
top:20px;
left:353px;
}
#IndividualUser_Mobile{
    position: absolute;
top:20px;
left:504px;
}
#IndividualUser_DOB{
    position: absolute;
top:20px;
left:608px;
}
#IndividualUser_Childrens{
    position: absolute;
top:20px;
left:687px;
}
#IndividualUser_Events{
    position: absolute;
top:20px;
left:799px;
}
#IndividualUser_Transactions{
    position: absolute;
top:20px;
left:894px;
}
#IndividualUser_Action{
    position: absolute;
top:20px;
left:1026px;

}

/* Business User Styles */

#BusinessUser_Profile_Image{
    position:absolute;
    left:30px;
    top:20px;
}
#BusinessUser_User_Name{
    position:absolute;
    left:168px;
    top:20px;
}
#BusinessUser_Bank{
    position:absolute;
    left:291px;
    top:20px;
}
#BusinessUser_Business_Name{
    position:absolute;
    left:371px;
    top:20px;
}
#BusinessUser_Mobile{
    position:absolute;
    left:531px;
    top:20px;
}
#BusinessUser_Email{
    position:absolute;
    left:665px;
    top:20px;
}
#BusinessUser_Transactions{
    position:absolute;
    left:846px;
    top:20px;
}
#BusinessUser_Actions{
    position:absolute;
    left:1028px;
    top:20px;
}


/* Transaction */

#Transaction_CheckBox{
   position: absolute;
   top:20px;
   left:10px;
}
#Transaction_Transaction_Id{
    position: absolute;
   top:20px;
   left:44px;
}
#Transaction_Transaction_Type{
    position: absolute;
   top:20px;
   left: 161px;
}
#Transaction_From_Person{
    position: absolute;
   top:20px;
   left: 296px;
}
#Transaction_To_Person{
    position: absolute;
   top:20px;
   left: 400px;
}
#Transaction_Transaction_Fee{
    position: absolute;
   top:20px;
   left: 484px;
}
#Transaction_Transaction_Charge{
    position: absolute;
   top:20px;
   left: 610px;
}
#Transaction_Amount{
    position: absolute;
   top:20px;
   left: 761px;
}
#Transaction_Message{
    position: absolute;
   top:20px;
   left: 833px;
}
#Transaction_Created_Date_Time{
    position: absolute;
   top:20px;
   left: 918px;
}
#Transaction_Status{
    position: absolute;
   top:20px;
   left: 1063px;
}

/* Transaction Fees */

#TransactionFees_Free_Type{
    position: absolute;
    top:20px;
    left:30px;
}
#TransactionFees_Fees{
    position: absolute;
    top:20px;
    left:322px;
}
#TransactionFees_Action{
    position: absolute;
    top:20px;
    left:863px;
}



/* WithDrawal List */

#WithdrawalList_CheckBox{
    position :absolute ;
   top:20px;
   left:10px;
}
#WithdrawalList_Transaction_Id{
    position :absolute ;
   top:20px;
   left:44px;
}
#WithdrawalList_User_Name{
    position :absolute ;
   top:20px;
   left:179px;
}
#WithdrawalList_Mobile{
    position :absolute ;
   top:20px;
   left:279px;
}
#WithdrawalList_Withdrawal_Type{
    position :absolute ;
   top:20px;
   left:348px;
}
#WithdrawalList_Transaction_Fees{
    position :absolute ;
   top:20px;
   left:490px;
}
#WithdrawalList_Transaction_Charge{
    position :absolute ;
   top:20px;
   left:624px;
}
#WithdrawalList_Amount{
    position :absolute ;
   top:20px;
   left:784px;
}
#WithdrawalList_Message{
    position :absolute ;
   top:20px;
   left:871px;
}
#WithdrawalList_Action{
    position :absolute ;
   top:20px;
   left:982px;
}

/* WithDrawalType */

#WithDrawalType_ID{
    position: absolute;
    top:20px;
    left:30px;
}
#WithDrawalType_Name{
    position: absolute;
    top:20px;
    left:322px;
}
#WithDrawalType_Action{
    position: absolute;
    top:20px;
    left:863px;
}

/* Offer List */
#OfferList_Offer_Name{
    position: absolute;
    top:20px;
    left:30px;
}
#OfferList_Offer_Image{
    position: absolute;
    top:20px;
    left:322px;
}
#OfferList_Action{
    position: absolute;
    top:20px;
    left:863px;
}

/* Events */

#Events_Checkbox{
    position: absolute;
    top:20px;
    left:10px;
}
#Events_Event_Id{
    position: absolute;
    top:20px;
    left:44px;
}
#Events_Users{
    position: absolute;
    top:20px;
    left:132px;
}
#Events_Owner{
    position: absolute;
    top:20px;
    left:206px;
}
#Events_Event_Name{
    position: absolute;
    top:20px;
    left:311px;
}
#Events_Event_Date{
    position: absolute;
    top:20px;
    left:438px;
}
#Events_Event_Balance{
    position: absolute;
    top:20px;
    left:566px;
}
#Events_Contributers{
    position: absolute;
    top:20px;
    left:673px;
}
#Events_Transactions{
    position: absolute;
    top:20px;
    left:825px;
}
#Events_Created_At{
    position: absolute;
    top:20px;
    left:978px;
}
/* Content */
#Content_Title_Slug{
    position: absolute;
    top:20px;
    left:30px;
}
#Content_Content{
    position: absolute;
    top:20px;
    left:322px;
}
#Content_Action{
    position: absolute;
    top:20px;
    left:863px;
}

/* Notifications */

#Notifications_Notification_ID{
    position: absolute;
    top:20px;
    left:30px;
}
#Notifications_Notification_Text{
    position: absolute;
    top:20px;
    left:322px;
}
#Notifications_Notification_Image{
    position: absolute;
    top:20px;
    left:574px;
}
#Notifications_Created_Time_Stamp{
    position: absolute;
    top:20px;
    left:863px;
}
`

export const Button=styled.button`

background-color: ${(props)=>props.bg};
padding:7px 20px 7px 20px;
border:none;
outline: none;
color:white;
border-radius:14px;

`

export const ParentReuse=styled.div`

border: 1px solid #F1F1F5;
position: relative;
height: 58px;
span{
    font-size: 12px;
    color:#696974;
    font-weight: 600;
}

/* Admin Reuse */

.AdminReuse_AccessTimeIcon{
    color:#D9D9DE;
    margin-right: 6.33px;
    width: 13.33px;
    height: 13.33px;

}
.AdminReuse_TimeToUser{
    position: absolute;
    top:20px;
    left:30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#AdminReuse_Email{
    position: absolute;
    top:20px;
    left:282px;
}
#AdminReuse_CreatedAt{
    position: absolute;
    top:20px;
    left:534px;
    word-spacing: 5px;
}
#AdminReuse_Role{
    position: absolute;
    top:20px;
    left:710px;
}
.AdminReuse_AdminBtns{
    position: absolute;
    top:10px;
    left:863px;
    width: 259px;
   
#AdminReuse_Edit{
    margin-right: 10px;

}
    
/* Individual User */


/* .IndividualUserReuse{
      position: absolute;
      top: 0px;
      left:0px;
   
      height: 58px;
      width: 100%;
 
} */


/* .IndividualUserReuseContainer{
    position: relative;
      height: 58px;
      width: 100%;
}
.IndividualUserReuse_InfoContainer{
        background-color: #639DFF;
        width: 98px;
        display: flex;
        align-items: center;
        height: 38px;
        border-radius: 8px;
        cursor: pointer;
        color:#FFFFFF;
        span{
            color:#FFFFFF;
            margin-left: 8px;
        }
        img{
            margin-left: 13px;
        }
    }
    .IndividualUserReuse_InfoBtnContainer{
        background-color: #4ECAA5;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        width: 67px;
        height: 38px;
        span{
            color:#FFFFFF;
           
        }
        position: absolute;
        top:10px;
        left:1026px;
    }
  
  .IndividualUserReuse_InfoUser{
    position: absolute;
    top:10px;
    left:30px;
    display: flex;
    align-items: center;
    cursor: pointer;
   .IndividualUserReuse_AccessInfoUser{
    color:#D9D9DE;
    margin-right: 6.33px;
    width: 13.33px;
    height: 13.33px;
   }
    img{
        width:38px;
        height:38px;
        border-radius: 50%;
        object-fit: cover;
      
    }
  }
    #IndividualUserReuse_FirstName{
        position: absolute;
        top:20px;
        left:160px;
    }
    #IndividualUserReuse_LastName{
        position: absolute;
        top:20px;
        left:256px;
    }
    #IndividualUserReuse_Email{
        position: absolute;
        top:20px;
        left:353px;
    }
    #IndividualUserReuse_Mobile{
        position: absolute;
        top:20px;
        left:504px;
    }
    #IndividualUserReuse_DOB{
        position: absolute;
        top:20px;
        left:608px;
    }
    .IndividualUserReuse_IC1{
        position: absolute;
        bottom:10px;
        left:687px;
        width: 98px;
        height: 38px;
    }
    .IndividualUserReuse_IC2{
        position: absolute;
        bottom:10px;
        left:799px;
        width: 82px;
        height: 38px;
    }
    .IndividualUserReuse_IC3{
        position: absolute;
        bottom:10px;
        left:894px;
        width: 118px;
        height: 38px;
  
    } */

}
`




