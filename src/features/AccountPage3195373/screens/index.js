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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f86/62d1/1ec46bc21ab1f654576876de2f7b2e61"
        }}
        style={styles.ImageBackground_1378_13320}
      />
      <View style={styles.View_1378_13321} />
      <View style={styles.View_1378_13322} />
      <View style={styles.View_1378_13323}>
        <Text style={styles.Text_1378_13323}>My Account</Text>
      </View>
      <View style={styles.View_1378_13324}>
        <View style={styles.View_I1378_13324_200_649} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c8a/dfd6/6b80ee4cb3d2d137fd351959b6ee251f"
          }}
          style={styles.ImageBackground_I1378_13324_200_655}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33fd/65ea/45cdc6e9be66a7f02bcafb88bff12b8f"
          }}
          style={styles.ImageBackground_I1378_13324_200_656}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e41/4dad/b9186fcb12118e6a2063346bab84e453"
          }}
          style={styles.ImageBackground_I1378_13324_282_5146}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/926f/9b31/37788a3e53bc1cad08fb891a371b0d71"
          }}
          style={styles.ImageBackground_I1378_13324_282_5147}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11a0/81a1/a78833a04721af7363b42f726483b0ca"
          }}
          style={styles.ImageBackground_I1378_13324_282_5148}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c447/5112/eadcf61a2474657e24f19c27d7d7466d"
          }}
          style={styles.ImageBackground_I1378_13324_616_1412}
        />
      </View>
      <View style={styles.View_1378_13325}>
        <Text style={styles.Text_1378_13325}>My points : 167</Text>
      </View>
      <View style={styles.View_1378_13326}>
        <View style={styles.View_1378_13327}>
          <Text style={styles.Text_1378_13327}>Show share on Facebook</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1af1/68e5/b4921f0d2978a7f28319694243480664"
          }}
          style={styles.ImageBackground_1378_13328}
        />
      </View>
      <View style={styles.View_1378_13329}>
        <View style={styles.View_1378_13330}>
          <Text style={styles.Text_1378_13330}>Everett Hansen</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5019/b533/b7c98402c6cd376b68eaf2dc63b2e166"
          }}
          style={styles.ImageBackground_1378_13331}
        />
        <View style={styles.View_1378_13334}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17fb/168d/ed4147f953fa0612d8f5917dd8c23f46"
            }}
            style={styles.ImageBackground_1378_13335}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f92/7b6c/0ada94aae56d6dcda6d9e738034be73b"
            }}
            style={styles.ImageBackground_1378_13336}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2717/71e1/508edd8c700b9676af7fb952e49e1149"
          }}
          style={styles.ImageBackground_1378_13337}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4201/1982/c9301278ae507fd49604b088991f066d"
        }}
        style={styles.ImageBackground_1378_13338}
      />
      <View style={styles.View_1378_13339}>
        <Text style={styles.Text_1378_13339}> national Team</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/071f/97ca/070832d3cee0840bab072fa45fd4ffa3"
        }}
        style={styles.ImageBackground_1378_13340}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/071f/97ca/070832d3cee0840bab072fa45fd4ffa3"
        }}
        style={styles.ImageBackground_1378_13341}
      />
      <View style={styles.View_1378_13342}>
        <Text style={styles.Text_1378_13342}>Change Team </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49af/2e4a/11248e030e979474a2fa15e42728807b"
        }}
        style={styles.ImageBackground_1378_13343}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de13/05a4/112de62ce32c31da10ee415b663a623d"
        }}
        style={styles.ImageBackground_1378_13344}
      />
      <View style={styles.View_1378_13345} />
      <View style={styles.View_1378_13346} />
      <View style={styles.View_1378_13347} />
      <View style={styles.View_1378_13348} />
      <View style={styles.View_1378_13349}>
        <View style={styles.View_1378_13350} />
        <View style={styles.View_1378_13351}>
          <Text style={styles.Text_1378_13351}>View transaction history</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0b4/d5af/b7541f4de3f858ad8670785566f82889"
        }}
        style={styles.ImageBackground_1378_13352}
      />
      <View style={styles.View_1378_13353}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7443/dda1/7b51859be688164435b2af746223e72d"
          }}
          style={styles.ImageBackground_I1378_13353_282_6132}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7892/c1ea/de3f766dda80bddeaaca16dbe3647481"
          }}
          style={styles.ImageBackground_I1378_13353_988_6517}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b3f/e3fb/7db2d0b297f2e1a6c142be9c13729ca7"
          }}
          style={styles.ImageBackground_I1378_13353_988_6519}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20e6/a9d7/a808783b1a426c2d8d35eec3c80c4546"
          }}
          style={styles.ImageBackground_I1378_13353_988_6521}
        />
        <View style={styles.View_I1378_13353_988_6522}>
          <Text style={styles.Text_I1378_13353_988_6522}>Home</Text>
        </View>
        <View style={styles.View_I1378_13353_1364_3889}>
          <Text style={styles.Text_I1378_13353_1364_3889}>Results</Text>
        </View>
        <View style={styles.View_I1378_13353_988_6523}>
          <Text style={styles.Text_I1378_13353_988_6523}>History</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f87/946c/3ab8c968fc445931fe1ba6ec9e930ae9"
          }}
          style={styles.ImageBackground_I1378_13353_988_6524}
        />
        <View style={styles.View_I1378_13353_1364_676}>
          <View style={styles.View_I1378_13353_1364_677}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0a8/ceb9/7d14d4cf1aac5331b12b0e3ead2bf7dd"
              }}
              style={styles.ImageBackground_I1378_13353_1364_678}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09c2/2175/507dc86c48ca17d66c7029c154ce5b2c"
              }}
              style={styles.ImageBackground_I1378_13353_1364_682}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e8e/21b4/9cbc39cb1c85fdbc22f2e7a141a74a80"
              }}
              style={styles.ImageBackground_I1378_13353_1364_684}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aad3/6c55/940837b04537e41909ae352fbbb04d32"
              }}
              style={styles.ImageBackground_I1378_13353_1364_686}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0eff/a0f3/74ccd44d9775c70cd68d2c38af17e92d"
              }}
              style={styles.ImageBackground_I1378_13353_1364_688}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cdb/13ff/2a5c1b5900421cb08c2b0ce2c7e119a7"
              }}
              style={styles.ImageBackground_I1378_13353_1364_690}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82e5/2ac0/2354ae66fa38914669617f8d242c1963"
              }}
              style={styles.ImageBackground_I1378_13353_1364_692}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_13353_1364_694}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82e5/2ac0/2354ae66fa38914669617f8d242c1963"
              }}
              style={styles.ImageBackground_I1378_13353_1364_696}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_13353_1364_698}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_13353_1364_700}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cdc/6045/dbc06947304927748b610ea000f55d73"
              }}
              style={styles.ImageBackground_I1378_13353_1364_702}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/720b/17b3/16ce33446d37af6c6285cc39c2270cc9"
              }}
              style={styles.ImageBackground_I1378_13353_1364_704}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cded/aea6/3ba0e67f257c63a7bdf60f41772bf286"
              }}
              style={styles.ImageBackground_I1378_13353_1364_706}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cded/aea6/3ba0e67f257c63a7bdf60f41772bf286"
              }}
              style={styles.ImageBackground_I1378_13353_1364_708}
            />
          </View>
          <View style={styles.View_I1378_13353_1364_710}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6c9/c4bc/f5025ebf9fa21253256e8e6609c12f95"
              }}
              style={styles.ImageBackground_I1378_13353_1364_711}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/871f/5cef/8cedd9500a12408982f2e93fea88bb62"
              }}
              style={styles.ImageBackground_I1378_13353_1364_713}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d07/0616/e9f729e081d510fa1e2c9979c6098443"
              }}
              style={styles.ImageBackground_I1378_13353_1364_715}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2475/5ccc/94641c3e81d91e9b3057e334dede2698"
              }}
              style={styles.ImageBackground_I1378_13353_1364_717}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8cd/ebf9/8269319277d39e1d4e040e0ed92180ed"
              }}
              style={styles.ImageBackground_I1378_13353_1364_719}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9eba/d401/4a377409d3c95f7296fa162b363831e2"
              }}
              style={styles.ImageBackground_I1378_13353_1364_721}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f112/243b/2b142e314a54e1abb992ac34be8c08d4"
              }}
              style={styles.ImageBackground_I1378_13353_1364_723}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1378_13354}>
        <Text style={styles.Text_1378_13354}>Language</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29b6/9ad8/581179fa29887690df58b8e7969d9a01"
        }}
        style={styles.ImageBackground_1378_13355}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_1378_13320: {
    width: 696,
    minWidth: 696,
    height: 1621,
    minHeight: 1621,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -161,
    top: 0
  },
  View_1378_13321: {
    width: 342,
    minWidth: 342,
    height: 575,
    minHeight: 575,
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
  View_1378_13322: {
    width: 152,
    minWidth: 152,
    height: 200,
    minHeight: 200,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 112,
    top: 127,
    backgroundColor: "rgba(13, 37, 109, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1378_13323: {
    width: 76,
    minWidth: 76,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 149,
    top: 93
  },
  Text_1378_13323: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13324: {
    width: 375,
    minWidth: 375,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1378_13324_200_649: {
    flexGrow: 1,
    width: 375,
    height: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(253, 253, 253, 1)"
  },
  ImageBackground_I1378_13324_200_655: {
    flexGrow: 1,
    width: 68.78099822998047,
    height: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 10
  },
  ImageBackground_I1378_13324_200_656: {
    flexGrow: 1,
    width: 10,
    height: 6.110935688018799,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 344,
    top: 14
  },
  ImageBackground_I1378_13324_282_5146: {
    flexGrow: 1,
    width: 33,
    height: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 232,
    top: 6
  },
  ImageBackground_I1378_13324_282_5147: {
    flexGrow: 1,
    width: 12,
    height: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 287,
    top: 23,
    resizeMode: "cover"
  },
  ImageBackground_I1378_13324_282_5148: {
    flexGrow: 1,
    width: 12,
    height: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 271,
    top: 24,
    resizeMode: "cover"
  },
  ImageBackground_I1378_13324_616_1412: {
    flexGrow: 1,
    width: 115.28089904785156,
    height: 24.60260009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 7.88629150390625,
    resizeMode: "cover"
  },
  View_1378_13325: {
    width: 98,
    minWidth: 98,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 138,
    top: 339
  },
  Text_1378_13325: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13326: {
    width: 181,
    minWidth: 181,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 96,
    top: 362
  },
  View_1378_13327: {
    width: 146,
    minWidth: 146,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 5
  },
  Text_1378_13327: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  ImageBackground_1378_13328: {
    width: 24,
    minWidth: 24,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_13329: {
    width: 127.15789794921875,
    minWidth: 127.15789794921875,
    height: 166.8946990966797,
    minHeight: 166.8946990966797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 124.48870849609375,
    top: 138.48873901367188
  },
  View_1378_13330: {
    width: 77.20301055908203,
    minWidth: 77.20301055908203,
    minHeight: 13.624059677124023,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.51129150390625,
    top: 129.42849731445312
  },
  Text_1378_13330: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8.8648042678833,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_13331: {
    width: 9,
    height: 9,
    top: 131.51123046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104.51123046875
  },
  View_1378_13334: {
    width: 47.684539794921875,
    minWidth: 47.684539794921875,
    height: 18.16541290283203,
    minHeight: 18.16541290283203,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 39.51129150390625,
    top: 148.72927856445312
  },
  ImageBackground_1378_13335: {
    width: 18.16541290283203,
    minWidth: 18.16541290283203,
    height: 18.16541290283203,
    minHeight: 18.16541290283203,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_1378_13336: {
    width: 19.300752639770508,
    minWidth: 19.300752639770508,
    height: 13.624059677124023,
    minHeight: 13.624059677124023,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28.3837890625,
    top: 2.270751953125,
    resizeMode: "cover"
  },
  ImageBackground_1378_13337: {
    width: 127.15789794921875,
    minWidth: 127.15789794921875,
    height: 119.21052551269531,
    minHeight: 119.21052551269531,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_1378_13338: {
    width: 32,
    minWidth: 32,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 283,
    top: 471,
    resizeMode: "cover"
  },
  View_1378_13339: {
    width: 120,
    minWidth: 120,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42,
    top: 472
  },
  Text_1378_13339: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_13340: {
    width: 9.892087936401367,
    minWidth: 9.892087936401367,
    height: 6.781851768493652,
    minHeight: 6.781851768493652,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 326,
    top: 476.99988651275635
  },
  ImageBackground_1378_13341: {
    width: 9.892087936401367,
    minWidth: 9.892087936401367,
    height: 6.781851768493652,
    minHeight: 6.781851768493652,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327,
    top: 425.99988555908203
  },
  View_1378_13342: {
    width: 133.9274139404297,
    minWidth: 133.9274139404297,
    minHeight: 15.155004501342773,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42,
    top: 526
  },
  Text_1378_13342: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_13343: {
    width: 10.671506881713867,
    minWidth: 10.671506881713867,
    height: 7.316208362579346,
    minHeight: 7.316208362579346,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 325.9998779296875,
    top: 528.9999542236328
  },
  ImageBackground_1378_13344: {
    width: 33,
    minWidth: 33,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 282,
    top: 517,
    resizeMode: "cover"
  },
  View_1378_13345: {
    width: 321,
    minWidth: 321,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 510,
    borderColor: "rgba(13, 37, 109, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1378_13346: {
    width: 321,
    minWidth: 321,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 457,
    borderColor: "rgba(13, 37, 109, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1378_13347: {
    width: 321,
    minWidth: 321,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 404,
    borderColor: "rgba(13, 37, 109, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1378_13348: {
    width: 134,
    minWidth: 134,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 95,
    top: 1077,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1378_13349: {
    width: 192,
    minWidth: 192,
    height: 47,
    minHeight: 47,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 91,
    top: 580
  },
  View_1378_13350: {
    width: 192,
    height: 47,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(90, 131, 255, 1)",
    borderTopLeftRadius: 20.693439483642578,
    borderTopRightRadius: 20.693439483642578,
    borderBottomLeftRadius: 20.693439483642578,
    borderBottomRightRadius: 20.693439483642578
  },
  View_1378_13351: {
    width: 152,
    top: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24
  },
  Text_1378_13351: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  ImageBackground_1378_13352: {
    width: 17,
    height: 17,
    top: 145,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 227
  },
  View_1378_13353: {
    width: 375,
    minWidth: 375,
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 698,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1378_13353_282_6132: {
    flexGrow: 1,
    width: 375,
    height: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I1378_13353_988_6517: {
    flexGrow: 1,
    width: 49.65380859375,
    height: 6.837890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 110,
    top: 36
  },
  ImageBackground_I1378_13353_988_6519: {
    flexGrow: 1,
    width: 30.00023651123047,
    height: 19.159626007080078,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 10
  },
  ImageBackground_I1378_13353_988_6521: {
    flexGrow: 1,
    width: 20,
    height: 18.33333396911621,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 11
  },
  View_I1378_13353_988_6522: {
    flexGrow: 1,
    width: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 34
  },
  Text_I1378_13353_988_6522: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1378_13353_1364_3889: {
    flexGrow: 1,
    width: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 217,
    top: 34
  },
  Text_I1378_13353_1364_3889: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1378_13353_988_6523: {
    flexGrow: 1,
    width: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 311,
    top: 34
  },
  Text_I1378_13353_988_6523: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_I1378_13353_988_6524: {
    flexGrow: 1,
    width: 20,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 314.763671875,
    top: 11
  },
  View_I1378_13353_1364_676: {
    flexGrow: 1,
    width: 26.763774871826172,
    height: 21.32741928100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 219,
    top: 9
  },
  View_I1378_13353_1364_677: {
    width: 26.763774871826172,
    height: 21.32741928100586,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_13353_1364_678: {
    width: 26.763774871826172,
    height: 7.109440326690674,
    top: 14.2177734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_13353_1364_682: {
    width: 3.029043436050415,
    height: 5.436952590942383,
    top: 15.890472412109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.700439453125
  },
  ImageBackground_I1378_13353_1364_684: {
    width: 1.4359464645385742,
    height: 2.9269301891326904,
    top: 16.3094482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.00128173828125
  },
  ImageBackground_I1378_13353_1364_686: {
    width: 1.634328842163086,
    height: 2.510079860687256,
    top: 18.81707763671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.42901611328125
  },
  ImageBackground_I1378_13353_1364_688: {
    width: 2.2307350635528564,
    height: 3.76133394241333,
    top: 14.218414306640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.23651123046875
  },
  ImageBackground_I1378_13353_1364_690: {
    width: 1.4360383749008179,
    height: 2.926727533340454,
    top: 16.3094482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.3260498046875
  },
  ImageBackground_I1378_13353_1364_692: {
    width: 3.6636908054351807,
    height: 0.836363673210144,
    top: 15.890899658203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.06634521484375
  },
  ImageBackground_I1378_13353_1364_694: {
    width: 4.219037055969238,
    height: 0.836363673210144,
    top: 18.81817626953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.42901611328125
  },
  ImageBackground_I1378_13353_1364_696: {
    width: 3.901637077331543,
    height: 0.836363673210144,
    top: 17.145477294921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.632080078125
  },
  ImageBackground_I1378_13353_1364_698: {
    width: 4.363308906555176,
    height: 0.836363673210144,
    top: 16.309234619140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.5999755859375
  },
  ImageBackground_I1378_13353_1364_700: {
    width: 4.324418067932129,
    height: 0.836363673210144,
    top: 16.309234619140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.8389892578125
  },
  ImageBackground_I1378_13353_1364_702: {
    width: 10.761491775512695,
    height: 0.836363673210144,
    top: 18.39984130859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.00128173828125
  },
  ImageBackground_I1378_13353_1364_704: {
    width: 13.381818771362305,
    height: 17.98181915283203,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.6907958984375
  },
  ImageBackground_I1378_13353_1364_706: {
    width: 6.869472980499268,
    height: 0.836363673210144,
    top: 14.21820068359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.18206787109375
  },
  ImageBackground_I1378_13353_1364_708: {
    width: 6.8698930740356445,
    height: 0.836363673210144,
    top: 14.21820068359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.7122802734375
  },
  View_I1378_13353_1364_710: {
    width: 9.199999809265137,
    height: 9.19999885559082,
    top: 2.0888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.7757568359375
  },
  ImageBackground_I1378_13353_1364_711: {
    width: 9.199999809265137,
    height: 9.19999885559082,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_13353_1364_713: {
    width: 3.3703079223632812,
    height: 2.6731395721435547,
    top: 0.125701904296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.1895751953125
  },
  ImageBackground_I1378_13353_1364_715: {
    width: 2.113673686981201,
    height: 3.861211061477661,
    top: 3.8561553955078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.0693359375
  },
  ImageBackground_I1378_13353_1364_717: {
    width: 4.0476789474487305,
    height: 1.6777453422546387,
    top: 7.2000274658203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.5762939453125
  },
  ImageBackground_I1378_13353_1364_719: {
    width: 2.1152143478393555,
    height: 3.860804319381714,
    top: 3.8565826416015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.0166015625
  },
  ImageBackground_I1378_13353_1364_721: {
    width: 3.369419813156128,
    height: 2.6729161739349365,
    top: 0.12591552734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.6429443359375
  },
  ImageBackground_I1378_13353_1364_723: {
    width: 3.915950298309326,
    height: 3.763637065887451,
    top: 2.5091400146484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.64501953125
  },
  View_1378_13354: {
    width: 62,
    minWidth: 62,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42,
    top: 420
  },
  Text_1378_13354: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_13355: {
    width: 33,
    minWidth: 33,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 283,
    top: 419,
    resizeMode: "cover"
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
