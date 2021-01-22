import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/199f/a1b7/e57b0a1f00abc95865805ec8b4dc42f0"
        }}
        style={styles.ImageBackground_1378_14162}
      />
      <View style={styles.View_1378_14163} />
      <View style={styles.View_1378_14164} />
      <View style={styles.View_1378_14165}>
        <View style={styles.View_1378_14166}>
          <View style={styles.View_1378_14167}>
            <View style={styles.View_1378_14168}>
              <View style={styles.View_1378_14169}>
                <Text style={styles.Text_1378_14169}>Upload image</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1378_14170}>
        <View style={styles.View_I1378_14170_126_1376} />
        <View style={styles.View_I1378_14170_126_1377}>
          <Text style={styles.Text_I1378_14170_126_1377}>Select lEAGUE</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e16d/6681/c5ee21b78b97e71e1d10b0556cb0f25c"
          }}
          style={styles.ImageBackground_I1378_14170_126_1378}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ebb/c008/5c34099e80030a3f972fcc0b05ca6cc7"
          }}
          style={styles.ImageBackground_I1378_14170_126_1380}
        />
      </View>
      <View style={styles.View_1378_14171}>
        <View style={styles.View_1378_14172} />
        <View style={styles.View_1378_14173}>
          <Text style={styles.Text_1378_14173}>Liga MX</Text>
        </View>
        <View style={styles.View_1378_14174}>
          <Text style={styles.Text_1378_14174}>Select tEAM</Text>
        </View>
        <View style={styles.View_1378_14175} />
        <View style={styles.View_1378_14176}>
          <Text style={styles.Text_1378_14176}>Premier League</Text>
        </View>
        <View style={styles.View_1378_14177}>
          <Text style={styles.Text_1378_14177}>SAF</Text>
        </View>
        <View style={styles.View_1378_14178}>
          <Text style={styles.Text_1378_14178}>MLS</Text>
        </View>
        <View style={styles.View_1378_14179}>
          <Text style={styles.Text_1378_14179}>Bundesliga</Text>
        </View>
        <View style={styles.View_1378_14180}>
          <Text style={styles.Text_1378_14180}>LA liga</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f144/86b1/38f2f6cac3f76d2961cbb6e1a9c575a6"
          }}
          style={styles.ImageBackground_1378_14181}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9120/2053/3dc749e4b8f5019eef1127715fc7b511"
          }}
          style={styles.ImageBackground_1378_14182}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90e6/db1d/af769b7dc10c9ceae1cebf413a575f76"
          }}
          style={styles.ImageBackground_1378_14183}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19b5/f79d/616168ead326c4c253989e5c38a687f4"
          }}
          style={styles.ImageBackground_1378_14184}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e17/16b8/4072cf4d91cdff107763549d740b3c92"
          }}
          style={styles.ImageBackground_1378_14185}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7261/f35b/7fca6bc788352d0d97ddf27682621c3e"
          }}
          style={styles.ImageBackground_1378_14186}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d9e/602f/81feb24b0c824e2141e1b8d2bee01a4e"
        }}
        style={styles.ImageBackground_1378_14187}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d9e/602f/81feb24b0c824e2141e1b8d2bee01a4e"
        }}
        style={styles.ImageBackground_1378_14188}
      />
      <View style={styles.View_1378_14189}>
        <View style={styles.View_1378_14190}>
          <Text style={styles.Text_1378_14190}>Liverpool</Text>
        </View>
        <View style={styles.View_1378_14191}>
          <Text style={styles.Text_1378_14191}>Arsenal</Text>
        </View>
        <View style={styles.View_1378_14192}>
          <Text style={styles.Text_1378_14192}>Manchester United</Text>
        </View>
        <View style={styles.View_1378_14193}>
          <Text style={styles.Text_1378_14193}>Newcastle United</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc51/bd5f/b653515288bc7e0dc2ef8bdc1eb10c9d"
          }}
          style={styles.ImageBackground_1378_14194}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a20a/ad6b/1fc56f4e92da3d72fb0c9179fa0b20f9"
          }}
          style={styles.ImageBackground_1378_14195}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b24/c3d1/198d188e172e7dadade31aa547d28bbc"
          }}
          style={styles.ImageBackground_1378_14196}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d79d/d683/44297eaa1854aab888a166a15fee2972"
          }}
          style={styles.ImageBackground_1378_14197}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/503a/6253/fe1237da459a6290fb128bcc48978a98"
        }}
        style={styles.ImageBackground_1378_14198}
      />
      <View style={styles.View_1378_14202}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7443/dda1/7b51859be688164435b2af746223e72d"
          }}
          style={styles.ImageBackground_I1378_14202_282_6132}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7892/c1ea/de3f766dda80bddeaaca16dbe3647481"
          }}
          style={styles.ImageBackground_I1378_14202_988_6517}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b3f/e3fb/7db2d0b297f2e1a6c142be9c13729ca7"
          }}
          style={styles.ImageBackground_I1378_14202_988_6519}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20e6/a9d7/a808783b1a426c2d8d35eec3c80c4546"
          }}
          style={styles.ImageBackground_I1378_14202_988_6521}
        />
        <View style={styles.View_I1378_14202_988_6522}>
          <Text style={styles.Text_I1378_14202_988_6522}>Home</Text>
        </View>
        <View style={styles.View_I1378_14202_1364_3889}>
          <Text style={styles.Text_I1378_14202_1364_3889}>Results</Text>
        </View>
        <View style={styles.View_I1378_14202_988_6523}>
          <Text style={styles.Text_I1378_14202_988_6523}>History</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f87/946c/3ab8c968fc445931fe1ba6ec9e930ae9"
          }}
          style={styles.ImageBackground_I1378_14202_988_6524}
        />
        <View style={styles.View_I1378_14202_1364_676}>
          <View style={styles.View_I1378_14202_1364_677}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0a8/ceb9/7d14d4cf1aac5331b12b0e3ead2bf7dd"
              }}
              style={styles.ImageBackground_I1378_14202_1364_678}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09c2/2175/507dc86c48ca17d66c7029c154ce5b2c"
              }}
              style={styles.ImageBackground_I1378_14202_1364_682}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e8e/21b4/9cbc39cb1c85fdbc22f2e7a141a74a80"
              }}
              style={styles.ImageBackground_I1378_14202_1364_684}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aad3/6c55/940837b04537e41909ae352fbbb04d32"
              }}
              style={styles.ImageBackground_I1378_14202_1364_686}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0eff/a0f3/74ccd44d9775c70cd68d2c38af17e92d"
              }}
              style={styles.ImageBackground_I1378_14202_1364_688}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cdb/13ff/2a5c1b5900421cb08c2b0ce2c7e119a7"
              }}
              style={styles.ImageBackground_I1378_14202_1364_690}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82e5/2ac0/2354ae66fa38914669617f8d242c1963"
              }}
              style={styles.ImageBackground_I1378_14202_1364_692}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_14202_1364_694}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82e5/2ac0/2354ae66fa38914669617f8d242c1963"
              }}
              style={styles.ImageBackground_I1378_14202_1364_696}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_14202_1364_698}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_14202_1364_700}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cdc/6045/dbc06947304927748b610ea000f55d73"
              }}
              style={styles.ImageBackground_I1378_14202_1364_702}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/720b/17b3/16ce33446d37af6c6285cc39c2270cc9"
              }}
              style={styles.ImageBackground_I1378_14202_1364_704}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cded/aea6/3ba0e67f257c63a7bdf60f41772bf286"
              }}
              style={styles.ImageBackground_I1378_14202_1364_706}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cded/aea6/3ba0e67f257c63a7bdf60f41772bf286"
              }}
              style={styles.ImageBackground_I1378_14202_1364_708}
            />
          </View>
          <View style={styles.View_I1378_14202_1364_710}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6c9/c4bc/f5025ebf9fa21253256e8e6609c12f95"
              }}
              style={styles.ImageBackground_I1378_14202_1364_711}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/871f/5cef/8cedd9500a12408982f2e93fea88bb62"
              }}
              style={styles.ImageBackground_I1378_14202_1364_713}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d07/0616/e9f729e081d510fa1e2c9979c6098443"
              }}
              style={styles.ImageBackground_I1378_14202_1364_715}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2475/5ccc/94641c3e81d91e9b3057e334dede2698"
              }}
              style={styles.ImageBackground_I1378_14202_1364_717}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8cd/ebf9/8269319277d39e1d4e040e0ed92180ed"
              }}
              style={styles.ImageBackground_I1378_14202_1364_719}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9eba/d401/4a377409d3c95f7296fa162b363831e2"
              }}
              style={styles.ImageBackground_I1378_14202_1364_721}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f112/243b/2b142e314a54e1abb992ac34be8c08d4"
              }}
              style={styles.ImageBackground_I1378_14202_1364_723}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_1378_14162: {
    width: 696,
    minWidth: 696,
    height: 765,
    minHeight: 765,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -161,
    top: 0
  },
  View_1378_14163: {
    width: 342,
    minWidth: 342,
    height: 593,
    minHeight: 593,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 72,
    backgroundColor: "rgba(253, 253, 253, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1378_14164: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 204,
    top: 467,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1378_14165: {
    width: 74,
    minWidth: 74,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 158,
    top: 294
  },
  View_1378_14166: {
    width: 74,
    height: 15,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1378_14167: {
    width: 74,
    minWidth: 74,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_14168: {
    width: 74,
    minWidth: 74,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_14169: {
    width: 74,
    minWidth: 74,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_1378_14169: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14170: {
    width: 342,
    minWidth: 342,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 72,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1378_14170_126_1376: {
    flexGrow: 1,
    width: 342,
    height: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 42, 173, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I1378_14170_126_1377: {
    flexGrow: 1,
    width: 89,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 15
  },
  Text_I1378_14170_126_1377: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_I1378_14170_126_1378: {
    flexGrow: 1,
    width: 21,
    height: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 294,
    top: 12
  },
  ImageBackground_I1378_14170_126_1380: {
    flexGrow: 1,
    width: 21,
    height: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 12
  },
  View_1378_14171: {
    width: 342,
    minWidth: 342,
    height: 414,
    minHeight: 414,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 144
  },
  View_1378_14172: {
    width: 342,
    minWidth: 342,
    height: 37,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 28,
    backgroundColor: "rgba(90, 131, 255, 1)"
  },
  View_1378_14173: {
    width: 52,
    minWidth: 52,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72,
    top: 0
  },
  Text_1378_14173: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14174: {
    width: 79,
    minWidth: 79,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 131,
    top: 256
  },
  Text_1378_14174: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14175: {
    width: 342,
    minWidth: 342,
    height: 37,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 377,
    backgroundColor: "rgba(90, 131, 255, 1)"
  },
  View_1378_14176: {
    width: 98,
    minWidth: 98,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72,
    top: 39
  },
  Text_1378_14176: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14177: {
    width: 26,
    minWidth: 26,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72,
    top: 78
  },
  Text_1378_14177: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14178: {
    width: 29,
    minWidth: 29,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72,
    top: 117
  },
  Text_1378_14178: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14179: {
    width: 70,
    minWidth: 70,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72,
    top: 156
  },
  Text_1378_14179: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14180: {
    width: 47,
    minWidth: 47,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72,
    top: 195
  },
  Text_1378_14180: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_14181: {
    width: 27,
    minWidth: 27,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_1378_14182: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 151,
    resizeMode: "cover"
  },
  ImageBackground_1378_14183: {
    width: 26,
    minWidth: 26,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 34,
    resizeMode: "cover"
  },
  ImageBackground_1378_14184: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 190,
    resizeMode: "cover"
  },
  ImageBackground_1378_14185: {
    width: 26,
    minWidth: 26,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 74,
    resizeMode: "cover"
  },
  ImageBackground_1378_14186: {
    width: 23,
    minWidth: 23,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 112,
    resizeMode: "cover"
  },
  ImageBackground_1378_14187: {
    width: 342,
    minWidth: 342,
    height: 0.00002989858876389917,
    minHeight: 0.00002989858876389917,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 383.9999694824219
  },
  ImageBackground_1378_14188: {
    width: 342,
    minWidth: 342,
    height: 0.00002989858876389917,
    minHeight: 0.00002989858876389917,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 429
  },
  View_1378_14189: {
    width: 154,
    minWidth: 154,
    height: 139,
    minHeight: 139,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 50,
    top: 452
  },
  View_1378_14190: {
    width: 58,
    minWidth: 58,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36,
    top: 2
  },
  Text_1378_14190: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14191: {
    width: 48,
    minWidth: 48,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36,
    top: 41
  },
  Text_1378_14191: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14192: {
    width: 118,
    minWidth: 118,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36,
    top: 80
  },
  Text_1378_14192: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14193: {
    width: 110,
    minWidth: 110,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36,
    top: 119
  },
  Text_1378_14193: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_14194: {
    width: 22,
    minWidth: 22,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 37,
    resizeMode: "cover"
  },
  ImageBackground_1378_14195: {
    width: 24,
    minWidth: 24,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 75,
    resizeMode: "cover"
  },
  ImageBackground_1378_14196: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 114,
    resizeMode: "cover"
  },
  ImageBackground_1378_14197: {
    width: 19,
    minWidth: 19,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_1378_14198: {
    width: 51,
    minWidth: 51,
    height: 9,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 161.5,
    top: 630
  },
  View_1378_14202: {
    width: 375,
    minWidth: 375,
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 698,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1378_14202_282_6132: {
    flexGrow: 1,
    width: 375,
    height: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I1378_14202_988_6517: {
    flexGrow: 1,
    width: 49.65380859375,
    height: 6.837890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 110,
    top: 36
  },
  ImageBackground_I1378_14202_988_6519: {
    flexGrow: 1,
    width: 30.00023651123047,
    height: 19.159626007080078,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 10
  },
  ImageBackground_I1378_14202_988_6521: {
    flexGrow: 1,
    width: 20,
    height: 18.33333396911621,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 11
  },
  View_I1378_14202_988_6522: {
    flexGrow: 1,
    width: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 34
  },
  Text_I1378_14202_988_6522: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1378_14202_1364_3889: {
    flexGrow: 1,
    width: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 217,
    top: 34
  },
  Text_I1378_14202_1364_3889: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1378_14202_988_6523: {
    flexGrow: 1,
    width: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 311,
    top: 34
  },
  Text_I1378_14202_988_6523: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_I1378_14202_988_6524: {
    flexGrow: 1,
    width: 20,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 314.763671875,
    top: 11
  },
  View_I1378_14202_1364_676: {
    flexGrow: 1,
    width: 26.763774871826172,
    height: 21.32741928100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 219,
    top: 9
  },
  View_I1378_14202_1364_677: {
    width: 26.763774871826172,
    height: 21.32741928100586,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_14202_1364_678: {
    width: 26.763774871826172,
    height: 7.109440326690674,
    top: 14.2177734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_14202_1364_682: {
    width: 3.029043436050415,
    height: 5.436952590942383,
    top: 15.890472412109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.700439453125
  },
  ImageBackground_I1378_14202_1364_684: {
    width: 1.4359464645385742,
    height: 2.9269301891326904,
    top: 16.3094482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.00128173828125
  },
  ImageBackground_I1378_14202_1364_686: {
    width: 1.634328842163086,
    height: 2.510079860687256,
    top: 18.81707763671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.42901611328125
  },
  ImageBackground_I1378_14202_1364_688: {
    width: 2.2307350635528564,
    height: 3.76133394241333,
    top: 14.218414306640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.23651123046875
  },
  ImageBackground_I1378_14202_1364_690: {
    width: 1.4360383749008179,
    height: 2.926727533340454,
    top: 16.3094482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.3260498046875
  },
  ImageBackground_I1378_14202_1364_692: {
    width: 3.6636908054351807,
    height: 0.836363673210144,
    top: 15.890899658203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.06634521484375
  },
  ImageBackground_I1378_14202_1364_694: {
    width: 4.219037055969238,
    height: 0.836363673210144,
    top: 18.81817626953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.42901611328125
  },
  ImageBackground_I1378_14202_1364_696: {
    width: 3.901637077331543,
    height: 0.836363673210144,
    top: 17.145477294921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.632080078125
  },
  ImageBackground_I1378_14202_1364_698: {
    width: 4.363308906555176,
    height: 0.836363673210144,
    top: 16.309234619140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.5999755859375
  },
  ImageBackground_I1378_14202_1364_700: {
    width: 4.324418067932129,
    height: 0.836363673210144,
    top: 16.309234619140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.8389892578125
  },
  ImageBackground_I1378_14202_1364_702: {
    width: 10.761491775512695,
    height: 0.836363673210144,
    top: 18.39984130859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.00128173828125
  },
  ImageBackground_I1378_14202_1364_704: {
    width: 13.381818771362305,
    height: 17.98181915283203,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.6907958984375
  },
  ImageBackground_I1378_14202_1364_706: {
    width: 6.869472980499268,
    height: 0.836363673210144,
    top: 14.21820068359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.18206787109375
  },
  ImageBackground_I1378_14202_1364_708: {
    width: 6.8698930740356445,
    height: 0.836363673210144,
    top: 14.21820068359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.7122802734375
  },
  View_I1378_14202_1364_710: {
    width: 9.199999809265137,
    height: 9.19999885559082,
    top: 2.0888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.7757568359375
  },
  ImageBackground_I1378_14202_1364_711: {
    width: 9.199999809265137,
    height: 9.19999885559082,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_14202_1364_713: {
    width: 3.3703079223632812,
    height: 2.6731395721435547,
    top: 0.125701904296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.1895751953125
  },
  ImageBackground_I1378_14202_1364_715: {
    width: 2.113673686981201,
    height: 3.861211061477661,
    top: 3.8561553955078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.0693359375
  },
  ImageBackground_I1378_14202_1364_717: {
    width: 4.0476789474487305,
    height: 1.6777453422546387,
    top: 7.2000274658203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.5762939453125
  },
  ImageBackground_I1378_14202_1364_719: {
    width: 2.1152143478393555,
    height: 3.860804319381714,
    top: 3.8565826416015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.0166015625
  },
  ImageBackground_I1378_14202_1364_721: {
    width: 3.369419813156128,
    height: 2.6729161739349365,
    top: 0.12591552734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.6429443359375
  },
  ImageBackground_I1378_14202_1364_723: {
    width: 3.915950298309326,
    height: 3.763637065887451,
    top: 2.5091400146484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.64501953125
  },
  View_2: { height: 750 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
