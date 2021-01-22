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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5143/ad37/e9d974b86f91b8ac8af475793e3528a7"
        }}
        style={styles.ImageBackground_1378_16171}
      />
      <View style={styles.View_1378_16172} />
      <View style={styles.View_1378_16173}>
        <View style={styles.View_1378_16174} />
        <View style={styles.View_1378_16175} />
        <View style={styles.View_1378_16176} />
        <View style={styles.View_1378_16177} />
        <View style={styles.View_1378_16178}>
          <Text style={styles.Text_1378_16178}>DRAW № 496</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59d4/3356/d390a59b89c297742697b0a27f248fdb"
          }}
          style={styles.ImageBackground_1378_16179}
        />
        <View style={styles.View_1378_16180}>
          <Text style={styles.Text_1378_16180}>Select day</Text>
        </View>
        <View style={styles.View_1378_16181}>
          <View style={styles.View_1378_16182}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/457e/a8cd/e99b5d5bd7e4972a96b7245e41e614fb"
              }}
              style={styles.ImageBackground_1378_16183}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9897/5f42/b4b71dc5d2e0e96d1ae29c80dd1a6bf7"
          }}
          style={styles.ImageBackground_1378_16195}
        />
      </View>
      <View style={styles.View_1378_16197}>
        <View style={styles.View_I1378_16197_200_649} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c8a/dfd6/6b80ee4cb3d2d137fd351959b6ee251f"
          }}
          style={styles.ImageBackground_I1378_16197_200_655}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33fd/65ea/45cdc6e9be66a7f02bcafb88bff12b8f"
          }}
          style={styles.ImageBackground_I1378_16197_200_656}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e41/4dad/b9186fcb12118e6a2063346bab84e453"
          }}
          style={styles.ImageBackground_I1378_16197_282_5146}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/926f/9b31/37788a3e53bc1cad08fb891a371b0d71"
          }}
          style={styles.ImageBackground_I1378_16197_282_5147}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11a0/81a1/a78833a04721af7363b42f726483b0ca"
          }}
          style={styles.ImageBackground_I1378_16197_282_5148}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c447/5112/eadcf61a2474657e24f19c27d7d7466d"
          }}
          style={styles.ImageBackground_I1378_16197_616_1412}
        />
      </View>
      <View style={styles.View_1378_16198}>
        <Text style={styles.Text_1378_16198}>Finished game</Text>
      </View>
      <View style={styles.View_1378_16199}>
        <Text style={styles.Text_1378_16199}>Score</Text>
      </View>
      <View style={styles.View_1378_16200}>
        <Text style={styles.Text_1378_16200}>win</Text>
      </View>
      <View style={styles.View_1378_16201}>
        <Text style={styles.Text_1378_16201}>My bet</Text>
      </View>
      <View style={styles.View_1378_16202} />
      <View style={styles.View_1378_16203}>
        <Text style={styles.Text_1378_16203}>2 - 0</Text>
      </View>
      <View style={styles.View_1378_16204} />
      <View style={styles.View_1378_16205}>
        <Text style={styles.Text_1378_16205}>2 - 0</Text>
      </View>
      <View style={styles.View_1378_16206}>
        <Text style={styles.Text_1378_16206}>1</Text>
      </View>
      <View style={styles.View_1378_16207}>
        <Text style={styles.Text_1378_16207}>2</Text>
      </View>
      <View style={styles.View_1378_16208}>
        <Text style={styles.Text_1378_16208}>2</Text>
      </View>
      <View style={styles.View_1378_16209}>
        <Text style={styles.Text_1378_16209}>1</Text>
      </View>
      <View style={styles.View_1378_16210}>
        <Text style={styles.Text_1378_16210}>1</Text>
      </View>
      <View style={styles.View_1378_16211}>
        <Text style={styles.Text_1378_16211}>1</Text>
      </View>
      <View style={styles.View_1378_16212}>
        <Text style={styles.Text_1378_16212}>1</Text>
      </View>
      <View style={styles.View_1378_16213}>
        <Text style={styles.Text_1378_16213}>X</Text>
      </View>
      <View style={styles.View_1378_16214}>
        <Text style={styles.Text_1378_16214}>0</Text>
      </View>
      <View style={styles.View_1378_16215}>
        <Text style={styles.Text_1378_16215}>2</Text>
      </View>
      <View style={styles.View_1378_16216}>
        <Text style={styles.Text_1378_16216}>X</Text>
      </View>
      <View style={styles.View_1378_16217}>
        <Text style={styles.Text_1378_16217}>1</Text>
      </View>
      <View style={styles.View_1378_16218}>
        <Text style={styles.Text_1378_16218}>1</Text>
      </View>
      <View style={styles.View_1378_16219}>
        <Text style={styles.Text_1378_16219}>1</Text>
      </View>
      <View style={styles.View_1378_16220}>
        <Text style={styles.Text_1378_16220}>Manchester - Liverpool</Text>
      </View>
      <View style={styles.View_1378_16221}>
        <Text style={styles.Text_1378_16221}>Manchester - Liverpool</Text>
      </View>
      <View style={styles.View_1378_16222} />
      <View style={styles.View_1378_16223}>
        <Text style={styles.Text_1378_16223}>2 - 0</Text>
      </View>
      <View style={styles.View_1378_16224}>
        <Text style={styles.Text_1378_16224}>Manchester - Liverpool</Text>
      </View>
      <View style={styles.View_1378_16225} />
      <View style={styles.View_1378_16226}>
        <Text style={styles.Text_1378_16226}>2 - 0</Text>
      </View>
      <View style={styles.View_1378_16227}>
        <Text style={styles.Text_1378_16227}>Manchester - Liverpool</Text>
      </View>
      <View style={styles.View_1378_16228} />
      <View style={styles.View_1378_16229}>
        <Text style={styles.Text_1378_16229}>2 - 0</Text>
      </View>
      <View style={styles.View_1378_16230}>
        <Text style={styles.Text_1378_16230}>Manchester - Liverpool</Text>
      </View>
      <View style={styles.View_1378_16231} />
      <View style={styles.View_1378_16232}>
        <Text style={styles.Text_1378_16232}>2 - 0</Text>
      </View>
      <View style={styles.View_1378_16233}>
        <Text style={styles.Text_1378_16233}>Manchester - Liverpool</Text>
      </View>
      <View style={styles.View_1378_16234} />
      <View style={styles.View_1378_16235}>
        <Text style={styles.Text_1378_16235}>2 - 0</Text>
      </View>
      <View style={styles.View_1378_16236}>
        <Text style={styles.Text_1378_16236}>1</Text>
      </View>
      <View style={styles.View_1378_16237}>
        <Text style={styles.Text_1378_16237}>1</Text>
      </View>
      <View style={styles.View_1378_16238} />
      <View style={styles.View_1378_16239}>
        <Text style={styles.Text_1378_16239}>2 - 0</Text>
      </View>
      <View style={styles.View_1378_16240}>
        <Text style={styles.Text_1378_16240}>1</Text>
      </View>
      <View style={styles.View_1378_16241}>
        <Text style={styles.Text_1378_16241}>1</Text>
      </View>
      <View style={styles.View_1378_16242} />
      <View style={styles.View_1378_16243}>
        <Text style={styles.Text_1378_16243}>2 - 0</Text>
      </View>
      <View style={styles.View_1378_16244}>
        <Text style={styles.Text_1378_16244}>1</Text>
      </View>
      <View style={styles.View_1378_16245}>
        <Text style={styles.Text_1378_16245}>1</Text>
      </View>
      <View style={styles.View_1378_16246} />
      <View style={styles.View_1378_16247}>
        <Text style={styles.Text_1378_16247}>2 - 0</Text>
      </View>
      <View style={styles.View_1378_16248}>
        <Text style={styles.Text_1378_16248}>1</Text>
      </View>
      <View style={styles.View_1378_16249}>
        <Text style={styles.Text_1378_16249}>1</Text>
      </View>
      <View style={styles.View_1378_16250} />
      <View style={styles.View_1378_16251}>
        <Text style={styles.Text_1378_16251}>2 - 0</Text>
      </View>
      <View style={styles.View_1378_16252}>
        <Text style={styles.Text_1378_16252}>1</Text>
      </View>
      <View style={styles.View_1378_16253}>
        <Text style={styles.Text_1378_16253}>1</Text>
      </View>
      <View style={styles.View_1378_16254} />
      <View style={styles.View_1378_16255}>
        <Text style={styles.Text_1378_16255}>2 - 0</Text>
      </View>
      <View style={styles.View_1378_16256}>
        <Text style={styles.Text_1378_16256}>1</Text>
      </View>
      <View style={styles.View_1378_16257}>
        <Text style={styles.Text_1378_16257}>1</Text>
      </View>
      <View style={styles.View_1378_16258} />
      <View style={styles.View_1378_16259}>
        <Text style={styles.Text_1378_16259}>2 - 0</Text>
      </View>
      <View style={styles.View_1378_16260}>
        <Text style={styles.Text_1378_16260}>Manchester - Liverpool</Text>
      </View>
      <View style={styles.View_1378_16261}>
        <Text style={styles.Text_1378_16261}>Manchester - Liverpool</Text>
      </View>
      <View style={styles.View_1378_16262}>
        <Text style={styles.Text_1378_16262}>Manchester - Liverpool</Text>
      </View>
      <View style={styles.View_1378_16263}>
        <Text style={styles.Text_1378_16263}>Manchester - Liverpool</Text>
      </View>
      <View style={styles.View_1378_16264}>
        <Text style={styles.Text_1378_16264}>Manchester - Liverpool</Text>
      </View>
      <View style={styles.View_1378_16265}>
        <Text style={styles.Text_1378_16265}>Manchester - Liverpool</Text>
      </View>
      <View style={styles.View_1378_16266}>
        <Text style={styles.Text_1378_16266}>Manchester - Liverpool</Text>
      </View>
      <View style={styles.View_1378_16267} />
      <View style={styles.View_1378_16268} />
      <View style={styles.View_1378_16269} />
      <View style={styles.View_1378_16270}>
        <View style={styles.View_1378_16271}>
          <Text style={styles.Text_1378_16271}>235 P 135 P 105 P</Text>
        </View>
        <View style={styles.View_1378_16272}>
          <Text style={styles.Text_1378_16272}>145 pcs 52 pcs 104 pcs</Text>
        </View>
        <View style={styles.View_1378_16273}>
          <Text style={styles.Text_1378_16273}>13 right 12 right 11 right</Text>
        </View>
      </View>
      <View style={styles.View_1378_16274} />
      <View style={styles.View_1378_16275}>
        <Text style={styles.Text_1378_16275}>Match Details</Text>
      </View>
      <View style={styles.View_1378_16276}>
        <Text style={styles.Text_1378_16276}>Divident</Text>
      </View>
      <View style={styles.View_1378_16277}>
        <Text style={styles.Text_1378_16277}>Total win</Text>
      </View>
      <View style={styles.View_1378_16278}>
        <Text style={styles.Text_1378_16278}>Turnover</Text>
      </View>
      <View style={styles.View_1378_16279}>
        <Text style={styles.Text_1378_16279}>1054. 76 P</Text>
      </View>
      <View style={styles.View_1378_16280}>
        <Text style={styles.Text_1378_16280}>2065 P</Text>
      </View>
      <View style={styles.View_1378_16281}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7443/dda1/7b51859be688164435b2af746223e72d"
          }}
          style={styles.ImageBackground_I1378_16281_282_6132}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7892/c1ea/de3f766dda80bddeaaca16dbe3647481"
          }}
          style={styles.ImageBackground_I1378_16281_988_6517}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b3f/e3fb/7db2d0b297f2e1a6c142be9c13729ca7"
          }}
          style={styles.ImageBackground_I1378_16281_988_6519}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20e6/a9d7/a808783b1a426c2d8d35eec3c80c4546"
          }}
          style={styles.ImageBackground_I1378_16281_988_6521}
        />
        <View style={styles.View_I1378_16281_988_6522}>
          <Text style={styles.Text_I1378_16281_988_6522}>Home</Text>
        </View>
        <View style={styles.View_I1378_16281_1364_3889}>
          <Text style={styles.Text_I1378_16281_1364_3889}>Results</Text>
        </View>
        <View style={styles.View_I1378_16281_988_6523}>
          <Text style={styles.Text_I1378_16281_988_6523}>History</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f87/946c/3ab8c968fc445931fe1ba6ec9e930ae9"
          }}
          style={styles.ImageBackground_I1378_16281_988_6524}
        />
        <View style={styles.View_I1378_16281_1364_676}>
          <View style={styles.View_I1378_16281_1364_677}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0a8/ceb9/7d14d4cf1aac5331b12b0e3ead2bf7dd"
              }}
              style={styles.ImageBackground_I1378_16281_1364_678}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09c2/2175/507dc86c48ca17d66c7029c154ce5b2c"
              }}
              style={styles.ImageBackground_I1378_16281_1364_682}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e8e/21b4/9cbc39cb1c85fdbc22f2e7a141a74a80"
              }}
              style={styles.ImageBackground_I1378_16281_1364_684}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aad3/6c55/940837b04537e41909ae352fbbb04d32"
              }}
              style={styles.ImageBackground_I1378_16281_1364_686}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0eff/a0f3/74ccd44d9775c70cd68d2c38af17e92d"
              }}
              style={styles.ImageBackground_I1378_16281_1364_688}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cdb/13ff/2a5c1b5900421cb08c2b0ce2c7e119a7"
              }}
              style={styles.ImageBackground_I1378_16281_1364_690}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82e5/2ac0/2354ae66fa38914669617f8d242c1963"
              }}
              style={styles.ImageBackground_I1378_16281_1364_692}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_16281_1364_694}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82e5/2ac0/2354ae66fa38914669617f8d242c1963"
              }}
              style={styles.ImageBackground_I1378_16281_1364_696}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_16281_1364_698}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_16281_1364_700}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cdc/6045/dbc06947304927748b610ea000f55d73"
              }}
              style={styles.ImageBackground_I1378_16281_1364_702}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/720b/17b3/16ce33446d37af6c6285cc39c2270cc9"
              }}
              style={styles.ImageBackground_I1378_16281_1364_704}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cded/aea6/3ba0e67f257c63a7bdf60f41772bf286"
              }}
              style={styles.ImageBackground_I1378_16281_1364_706}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cded/aea6/3ba0e67f257c63a7bdf60f41772bf286"
              }}
              style={styles.ImageBackground_I1378_16281_1364_708}
            />
          </View>
          <View style={styles.View_I1378_16281_1364_710}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6c9/c4bc/f5025ebf9fa21253256e8e6609c12f95"
              }}
              style={styles.ImageBackground_I1378_16281_1364_711}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/871f/5cef/8cedd9500a12408982f2e93fea88bb62"
              }}
              style={styles.ImageBackground_I1378_16281_1364_713}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d07/0616/e9f729e081d510fa1e2c9979c6098443"
              }}
              style={styles.ImageBackground_I1378_16281_1364_715}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2475/5ccc/94641c3e81d91e9b3057e334dede2698"
              }}
              style={styles.ImageBackground_I1378_16281_1364_717}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8cd/ebf9/8269319277d39e1d4e040e0ed92180ed"
              }}
              style={styles.ImageBackground_I1378_16281_1364_719}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9eba/d401/4a377409d3c95f7296fa162b363831e2"
              }}
              style={styles.ImageBackground_I1378_16281_1364_721}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f112/243b/2b142e314a54e1abb992ac34be8c08d4"
              }}
              style={styles.ImageBackground_I1378_16281_1364_723}
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
  ImageBackground_1378_16171: {
    width: 696,
    minWidth: 696,
    height: 2001,
    minHeight: 2001,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -88,
    top: -388
  },
  View_1378_16172: {
    width: 341,
    minWidth: 341,
    height: 579,
    minHeight: 579,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 73,
    backgroundColor: "rgba(253, 253, 253, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1378_16173: {
    width: 342,
    minWidth: 342,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 72,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1378_16174: {
    width: 341,
    minWidth: 341,
    height: 37,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 33,
    backgroundColor: "rgba(243, 243, 243, 1)"
  },
  View_1378_16175: {
    width: 341,
    height: 33,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    backgroundColor: "rgba(0, 28, 113, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1378_16176: {
    width: 21,
    height: 15.400001525878906,
    top: 8.79998779296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 294,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1378_16177: {
    width: 21,
    height: 15.400001525878906,
    top: 8.79998779296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1378_16178: {
    width: 73,
    minWidth: 73,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 11
  },
  Text_1378_16178: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_16179: {
    width: 91,
    minWidth: 91,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 245,
    top: 4
  },
  View_1378_16180: {
    width: 48.37423324584961,
    minWidth: 48.37423324584961,
    minHeight: 12.239263534545898,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 267.809814453125,
    top: 11.742431640625
  },
  Text_1378_16180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1378_16181: {
    width: 12.822086334228516,
    height: 13.80759048461914,
    top: 10.34326171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 249.993896484375
  },
  View_1378_16182: {
    width: 12.822086334228516,
    height: 13.80759048461914,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1378_16183: {
    width: 12.822086334228516,
    height: 13.80759048461914,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1378_16195: {
    width: 6.993865013122559,
    height: 3.810772180557251,
    top: 16.68701171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 320.8466796875
  },
  View_1378_16197: {
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
  View_I1378_16197_200_649: {
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
  ImageBackground_I1378_16197_200_655: {
    flexGrow: 1,
    width: 68.78099822998047,
    height: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 10
  },
  ImageBackground_I1378_16197_200_656: {
    flexGrow: 1,
    width: 10,
    height: 6.110935688018799,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 344,
    top: 14
  },
  ImageBackground_I1378_16197_282_5146: {
    flexGrow: 1,
    width: 33,
    height: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 232,
    top: 6
  },
  ImageBackground_I1378_16197_282_5147: {
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
  ImageBackground_I1378_16197_282_5148: {
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
  ImageBackground_I1378_16197_616_1412: {
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
  View_1378_16198: {
    width: 67,
    minWidth: 67,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 122
  },
  Text_1378_16198: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16199: {
    width: 26,
    minWidth: 26,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 171,
    top: 122
  },
  Text_1378_16199: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16200: {
    width: 18,
    minWidth: 18,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 241,
    top: 123
  },
  Text_1378_16200: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16201: {
    width: 32,
    minWidth: 32,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 300,
    top: 122
  },
  Text_1378_16201: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16202: {
    width: 36.85847473144531,
    minWidth: 36.85847473144531,
    height: 18.67496109008789,
    minHeight: 18.67496109008789,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 166,
    top: 156,
    backgroundColor: "rgba(90, 131, 255, 1)",
    borderTopLeftRadius: 2.4572317600250244,
    borderTopRightRadius: 2.4572317600250244,
    borderBottomLeftRadius: 2.4572317600250244,
    borderBottomRightRadius: 2.4572317600250244
  },
  View_1378_16203: {
    width: 17.692068099975586,
    minWidth: 17.692068099975586,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175.828857421875,
    top: 159.931396484375
  },
  Text_1378_16203: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.846034049987793,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16204: {
    width: 36.85847473144531,
    minWidth: 36.85847473144531,
    height: 18.67496109008789,
    minHeight: 18.67496109008789,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 166,
    top: 190,
    backgroundColor: "rgba(90, 131, 255, 1)",
    borderTopLeftRadius: 2.4572317600250244,
    borderTopRightRadius: 2.4572317600250244,
    borderBottomLeftRadius: 2.4572317600250244,
    borderBottomRightRadius: 2.4572317600250244
  },
  View_1378_16205: {
    width: 17.692068099975586,
    minWidth: 17.692068099975586,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175.828857421875,
    top: 193.931396484375
  },
  Text_1378_16205: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.846034049987793,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16206: {
    width: 5.405910015106201,
    minWidth: 5.405910015106201,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 245,
    top: 158
  },
  Text_1378_16206: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16207: {
    width: 5.405910015106201,
    minWidth: 5.405910015106201,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 245,
    top: 191
  },
  Text_1378_16207: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16208: {
    width: 5.405910015106201,
    minWidth: 5.405910015106201,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 313,
    top: 191
  },
  Text_1378_16208: {
    color: "rgba(79, 195, 24, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16209: {
    width: 5.405910015106201,
    minWidth: 5.405910015106201,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 245,
    top: 337
  },
  Text_1378_16209: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16210: {
    width: 5.405910015106201,
    minWidth: 5.405910015106201,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 313,
    top: 337
  },
  Text_1378_16210: {
    color: "rgba(79, 195, 24, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16211: {
    width: 5.405910015106201,
    minWidth: 5.405910015106201,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 245,
    top: 371
  },
  Text_1378_16211: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16212: {
    width: 5.405910015106201,
    minWidth: 5.405910015106201,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 313,
    top: 371
  },
  Text_1378_16212: {
    color: "rgba(79, 195, 24, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16213: {
    width: 5.405910015106201,
    minWidth: 5.405910015106201,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 245,
    top: 227
  },
  Text_1378_16213: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16214: {
    width: 5.405910015106201,
    minWidth: 5.405910015106201,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 313,
    top: 227
  },
  Text_1378_16214: {
    color: "rgba(215, 16, 16, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16215: {
    width: 5.405910015106201,
    minWidth: 5.405910015106201,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 245,
    top: 266
  },
  Text_1378_16215: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16216: {
    width: 5.405910015106201,
    minWidth: 5.405910015106201,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 313,
    top: 266
  },
  Text_1378_16216: {
    color: "rgba(215, 16, 16, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16217: {
    width: 5.405910015106201,
    minWidth: 5.405910015106201,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 313,
    top: 158
  },
  Text_1378_16217: {
    color: "rgba(79, 195, 24, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16218: {
    width: 5.405910015106201,
    minWidth: 5.405910015106201,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 245,
    top: 301
  },
  Text_1378_16218: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16219: {
    width: 5.405910015106201,
    minWidth: 5.405910015106201,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 313,
    top: 301
  },
  Text_1378_16219: {
    color: "rgba(79, 195, 24, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16220: {
    width: 118.43856811523438,
    minWidth: 118.43856811523438,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 158
  },
  Text_1378_16220: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16221: {
    width: 118.43856811523438,
    minWidth: 118.43856811523438,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 193
  },
  Text_1378_16221: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16222: {
    width: 36.85847473144531,
    minWidth: 36.85847473144531,
    height: 18.67496109008789,
    minHeight: 18.67496109008789,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 166,
    top: 226,
    backgroundColor: "rgba(90, 131, 255, 1)",
    borderTopLeftRadius: 2.4572317600250244,
    borderTopRightRadius: 2.4572317600250244,
    borderBottomLeftRadius: 2.4572317600250244,
    borderBottomRightRadius: 2.4572317600250244
  },
  View_1378_16223: {
    width: 17.692068099975586,
    minWidth: 17.692068099975586,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175.828857421875,
    top: 229.931396484375
  },
  Text_1378_16223: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.846034049987793,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16224: {
    width: 118.43856811523438,
    minWidth: 118.43856811523438,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 228
  },
  Text_1378_16224: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16225: {
    width: 36.85847473144531,
    minWidth: 36.85847473144531,
    height: 18.67496109008789,
    minHeight: 18.67496109008789,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 166,
    top: 261,
    backgroundColor: "rgba(90, 131, 255, 1)",
    borderTopLeftRadius: 2.4572317600250244,
    borderTopRightRadius: 2.4572317600250244,
    borderBottomLeftRadius: 2.4572317600250244,
    borderBottomRightRadius: 2.4572317600250244
  },
  View_1378_16226: {
    width: 17.692068099975586,
    minWidth: 17.692068099975586,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175.828857421875,
    top: 264.931396484375
  },
  Text_1378_16226: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.846034049987793,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16227: {
    width: 118.43856811523438,
    minWidth: 118.43856811523438,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 263
  },
  Text_1378_16227: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16228: {
    width: 36.85847473144531,
    minWidth: 36.85847473144531,
    height: 18.67496109008789,
    minHeight: 18.67496109008789,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 166,
    top: 296,
    backgroundColor: "rgba(90, 131, 255, 1)",
    borderTopLeftRadius: 2.4572317600250244,
    borderTopRightRadius: 2.4572317600250244,
    borderBottomLeftRadius: 2.4572317600250244,
    borderBottomRightRadius: 2.4572317600250244
  },
  View_1378_16229: {
    width: 17.692068099975586,
    minWidth: 17.692068099975586,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175.828857421875,
    top: 300.931396484375
  },
  Text_1378_16229: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.846034049987793,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16230: {
    width: 118.43856811523438,
    minWidth: 118.43856811523438,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 298
  },
  Text_1378_16230: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16231: {
    width: 36.85847473144531,
    minWidth: 36.85847473144531,
    height: 18.67496109008789,
    minHeight: 18.67496109008789,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 166,
    top: 330,
    backgroundColor: "rgba(90, 131, 255, 1)",
    borderTopLeftRadius: 2.4572317600250244,
    borderTopRightRadius: 2.4572317600250244,
    borderBottomLeftRadius: 2.4572317600250244,
    borderBottomRightRadius: 2.4572317600250244
  },
  View_1378_16232: {
    width: 17.692068099975586,
    minWidth: 17.692068099975586,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175.828857421875,
    top: 333.931396484375
  },
  Text_1378_16232: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.846034049987793,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16233: {
    width: 118.43856811523438,
    minWidth: 118.43856811523438,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 333
  },
  Text_1378_16233: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16234: {
    width: 36.85847473144531,
    minWidth: 36.85847473144531,
    height: 18.67496109008789,
    minHeight: 18.67496109008789,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 166,
    top: 366,
    backgroundColor: "rgba(90, 131, 255, 1)",
    borderTopLeftRadius: 2.4572317600250244,
    borderTopRightRadius: 2.4572317600250244,
    borderBottomLeftRadius: 2.4572317600250244,
    borderBottomRightRadius: 2.4572317600250244
  },
  View_1378_16235: {
    width: 17.692068099975586,
    minWidth: 17.692068099975586,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175.828857421875,
    top: 369.931396484375
  },
  Text_1378_16235: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.846034049987793,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16236: {
    width: 5.405910015106201,
    minWidth: 5.405910015106201,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 245,
    top: 402
  },
  Text_1378_16236: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16237: {
    width: 5.405910015106201,
    minWidth: 5.405910015106201,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 313,
    top: 402
  },
  Text_1378_16237: {
    color: "rgba(79, 195, 24, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16238: {
    width: 36.85847473144531,
    minWidth: 36.85847473144531,
    height: 18.67496109008789,
    minHeight: 18.67496109008789,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 166,
    top: 397,
    backgroundColor: "rgba(90, 131, 255, 1)",
    borderTopLeftRadius: 2.4572317600250244,
    borderTopRightRadius: 2.4572317600250244,
    borderBottomLeftRadius: 2.4572317600250244,
    borderBottomRightRadius: 2.4572317600250244
  },
  View_1378_16239: {
    width: 17.692068099975586,
    minWidth: 17.692068099975586,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175.828857421875,
    top: 400.931396484375
  },
  Text_1378_16239: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.846034049987793,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16240: {
    width: 5.405910015106201,
    minWidth: 5.405910015106201,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 245,
    top: 436
  },
  Text_1378_16240: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16241: {
    width: 5.405910015106201,
    minWidth: 5.405910015106201,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 313,
    top: 436
  },
  Text_1378_16241: {
    color: "rgba(79, 195, 24, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16242: {
    width: 36.85847473144531,
    minWidth: 36.85847473144531,
    height: 18.67496109008789,
    minHeight: 18.67496109008789,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 166,
    top: 431,
    backgroundColor: "rgba(90, 131, 255, 1)",
    borderTopLeftRadius: 2.4572317600250244,
    borderTopRightRadius: 2.4572317600250244,
    borderBottomLeftRadius: 2.4572317600250244,
    borderBottomRightRadius: 2.4572317600250244
  },
  View_1378_16243: {
    width: 17.692068099975586,
    minWidth: 17.692068099975586,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175.828857421875,
    top: 434.931396484375
  },
  Text_1378_16243: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.846034049987793,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16244: {
    width: 5.405910015106201,
    minWidth: 5.405910015106201,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 245,
    top: 472
  },
  Text_1378_16244: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16245: {
    width: 5.405910015106201,
    minWidth: 5.405910015106201,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 313,
    top: 472
  },
  Text_1378_16245: {
    color: "rgba(79, 195, 24, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16246: {
    width: 36.85847473144531,
    minWidth: 36.85847473144531,
    height: 18.67496109008789,
    minHeight: 18.67496109008789,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 166,
    top: 467,
    backgroundColor: "rgba(90, 131, 255, 1)",
    borderTopLeftRadius: 2.4572317600250244,
    borderTopRightRadius: 2.4572317600250244,
    borderBottomLeftRadius: 2.4572317600250244,
    borderBottomRightRadius: 2.4572317600250244
  },
  View_1378_16247: {
    width: 17.692068099975586,
    minWidth: 17.692068099975586,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175.828857421875,
    top: 470.931396484375
  },
  Text_1378_16247: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.846034049987793,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16248: {
    width: 5.405910015106201,
    minWidth: 5.405910015106201,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 245,
    top: 508
  },
  Text_1378_16248: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16249: {
    width: 5.405910015106201,
    minWidth: 5.405910015106201,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 313,
    top: 508
  },
  Text_1378_16249: {
    color: "rgba(79, 195, 24, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16250: {
    width: 36.85847473144531,
    minWidth: 36.85847473144531,
    height: 18.67496109008789,
    minHeight: 18.67496109008789,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 166,
    top: 503,
    backgroundColor: "rgba(90, 131, 255, 1)",
    borderTopLeftRadius: 2.4572317600250244,
    borderTopRightRadius: 2.4572317600250244,
    borderBottomLeftRadius: 2.4572317600250244,
    borderBottomRightRadius: 2.4572317600250244
  },
  View_1378_16251: {
    width: 17.692068099975586,
    minWidth: 17.692068099975586,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175.828857421875,
    top: 506.931396484375
  },
  Text_1378_16251: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.846034049987793,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16252: {
    width: 5.405910015106201,
    minWidth: 5.405910015106201,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 245,
    top: 544
  },
  Text_1378_16252: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16253: {
    width: 5.405910015106201,
    minWidth: 5.405910015106201,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 313,
    top: 544
  },
  Text_1378_16253: {
    color: "rgba(79, 195, 24, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16254: {
    width: 36.85847473144531,
    minWidth: 36.85847473144531,
    height: 18.67496109008789,
    minHeight: 18.67496109008789,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 166,
    top: 539,
    backgroundColor: "rgba(90, 131, 255, 1)",
    borderTopLeftRadius: 2.4572317600250244,
    borderTopRightRadius: 2.4572317600250244,
    borderBottomLeftRadius: 2.4572317600250244,
    borderBottomRightRadius: 2.4572317600250244
  },
  View_1378_16255: {
    width: 17.692068099975586,
    minWidth: 17.692068099975586,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175.828857421875,
    top: 542.931396484375
  },
  Text_1378_16255: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.846034049987793,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16256: {
    width: 5.405910015106201,
    minWidth: 5.405910015106201,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 245,
    top: 580
  },
  Text_1378_16256: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16257: {
    width: 5.405910015106201,
    minWidth: 5.405910015106201,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 313,
    top: 580
  },
  Text_1378_16257: {
    color: "rgba(79, 195, 24, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16258: {
    width: 36.85847473144531,
    minWidth: 36.85847473144531,
    height: 18.67496109008789,
    minHeight: 18.67496109008789,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 166,
    top: 575,
    backgroundColor: "rgba(90, 131, 255, 1)",
    borderTopLeftRadius: 2.4572317600250244,
    borderTopRightRadius: 2.4572317600250244,
    borderBottomLeftRadius: 2.4572317600250244,
    borderBottomRightRadius: 2.4572317600250244
  },
  View_1378_16259: {
    width: 17.692068099975586,
    minWidth: 17.692068099975586,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175.828857421875,
    top: 578.931396484375
  },
  Text_1378_16259: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.846034049987793,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16260: {
    width: 118.43856811523438,
    minWidth: 118.43856811523438,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 368
  },
  Text_1378_16260: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16261: {
    width: 118.43856811523438,
    minWidth: 118.43856811523438,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 402
  },
  Text_1378_16261: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16262: {
    width: 118.43856811523438,
    minWidth: 118.43856811523438,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 437
  },
  Text_1378_16262: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16263: {
    width: 118.43856811523438,
    minWidth: 118.43856811523438,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 472
  },
  Text_1378_16263: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16264: {
    width: 118.43856811523438,
    minWidth: 118.43856811523438,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 507
  },
  Text_1378_16264: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16265: {
    width: 118.43856811523438,
    minWidth: 118.43856811523438,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 544
  },
  Text_1378_16265: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16266: {
    width: 118.43856811523438,
    minWidth: 118.43856811523438,
    minHeight: 10.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 578
  },
  Text_1378_16266: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16267: {
    width: 345,
    minWidth: 345,
    height: 337,
    minHeight: 337,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 725,
    backgroundColor: "rgba(252, 252, 252, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1378_16268: {
    width: 345,
    minWidth: 345,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 801,
    backgroundColor: "rgba(215, 215, 215, 1)"
  },
  View_1378_16269: {
    width: 345,
    minWidth: 345,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 959,
    backgroundColor: "rgba(0, 28, 113, 1)"
  },
  View_1378_16270: {
    width: 269,
    minWidth: 269,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 51,
    top: 863
  },
  View_1378_16271: {
    width: 37,
    minWidth: 37,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 232,
    top: 0
  },
  Text_1378_16271: {
    color: "rgba(4, 24, 85, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16272: {
    width: 51,
    minWidth: 51,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 112,
    top: 0
  },
  Text_1378_16272: {
    color: "rgba(14, 19, 35, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16273: {
    width: 48,
    minWidth: 48,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_1378_16273: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_16274: {
    width: 345,
    minWidth: 345,
    height: 47,
    minHeight: 47,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 692,
    backgroundColor: "rgba(0, 28, 113, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1378_16275: {
    width: 87,
    minWidth: 87,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 144,
    top: 708
  },
  Text_1378_16275: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16276: {
    width: 62,
    minWidth: 62,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 156,
    top: 813
  },
  Text_1378_16276: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_16277: {
    width: 82,
    minWidth: 82,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 146,
    top: 971
  },
  Text_1378_16277: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_16278: {
    width: 56,
    minWidth: 56,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 767
  },
  Text_1378_16278: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16279: {
    width: 69,
    minWidth: 69,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 251,
    top: 767
  },
  Text_1378_16279: {
    color: "rgba(0, 28, 113, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16280: {
    width: 58,
    minWidth: 58,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 158,
    top: 1019
  },
  Text_1378_16280: {
    color: "rgba(0, 28, 113, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16281: {
    width: 375,
    minWidth: 375,
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1206,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1378_16281_282_6132: {
    flexGrow: 1,
    width: 375,
    height: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I1378_16281_988_6517: {
    flexGrow: 1,
    width: 49.65380859375,
    height: 6.837890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 110,
    top: 36
  },
  ImageBackground_I1378_16281_988_6519: {
    flexGrow: 1,
    width: 30.00023651123047,
    height: 19.159626007080078,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 10
  },
  ImageBackground_I1378_16281_988_6521: {
    flexGrow: 1,
    width: 20,
    height: 18.33333396911621,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 11
  },
  View_I1378_16281_988_6522: {
    flexGrow: 1,
    width: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 34
  },
  Text_I1378_16281_988_6522: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1378_16281_1364_3889: {
    flexGrow: 1,
    width: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 217,
    top: 34
  },
  Text_I1378_16281_1364_3889: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1378_16281_988_6523: {
    flexGrow: 1,
    width: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 311,
    top: 34
  },
  Text_I1378_16281_988_6523: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_I1378_16281_988_6524: {
    flexGrow: 1,
    width: 20,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 314.763671875,
    top: 11
  },
  View_I1378_16281_1364_676: {
    flexGrow: 1,
    width: 26.763774871826172,
    height: 21.32741928100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 219,
    top: 9
  },
  View_I1378_16281_1364_677: {
    width: 26.763774871826172,
    height: 21.32741928100586,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_16281_1364_678: {
    width: 26.763774871826172,
    height: 7.109440326690674,
    top: 14.2177734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_16281_1364_682: {
    width: 3.029043436050415,
    height: 5.436952590942383,
    top: 15.89044189453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.700439453125
  },
  ImageBackground_I1378_16281_1364_684: {
    width: 1.4359464645385742,
    height: 2.9269301891326904,
    top: 16.3094482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.001220703125
  },
  ImageBackground_I1378_16281_1364_686: {
    width: 1.634328842163086,
    height: 2.510079860687256,
    top: 18.81707763671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.4290771484375
  },
  ImageBackground_I1378_16281_1364_688: {
    width: 2.2307350635528564,
    height: 3.76133394241333,
    top: 14.21844482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.2364501953125
  },
  ImageBackground_I1378_16281_1364_690: {
    width: 1.4360383749008179,
    height: 2.926727533340454,
    top: 16.3094482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.3260498046875
  },
  ImageBackground_I1378_16281_1364_692: {
    width: 3.6636908054351807,
    height: 0.836363673210144,
    top: 15.890869140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.06640625
  },
  ImageBackground_I1378_16281_1364_694: {
    width: 4.219037055969238,
    height: 0.836363673210144,
    top: 18.81817626953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.4290771484375
  },
  ImageBackground_I1378_16281_1364_696: {
    width: 3.901637077331543,
    height: 0.836363673210144,
    top: 17.14544677734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.632080078125
  },
  ImageBackground_I1378_16281_1364_698: {
    width: 4.363308906555176,
    height: 0.836363673210144,
    top: 16.3092041015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.5999755859375
  },
  ImageBackground_I1378_16281_1364_700: {
    width: 4.324418067932129,
    height: 0.836363673210144,
    top: 16.3092041015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.8389892578125
  },
  ImageBackground_I1378_16281_1364_702: {
    width: 10.761491775512695,
    height: 0.836363673210144,
    top: 18.39984130859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.001220703125
  },
  ImageBackground_I1378_16281_1364_704: {
    width: 13.381818771362305,
    height: 17.98181915283203,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.6907958984375
  },
  ImageBackground_I1378_16281_1364_706: {
    width: 6.869472980499268,
    height: 0.836363673210144,
    top: 14.21820068359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.1820068359375
  },
  ImageBackground_I1378_16281_1364_708: {
    width: 6.8698930740356445,
    height: 0.836363673210144,
    top: 14.21820068359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.7122802734375
  },
  View_I1378_16281_1364_710: {
    width: 9.199999809265137,
    height: 9.19999885559082,
    top: 2.0888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.7757568359375
  },
  ImageBackground_I1378_16281_1364_711: {
    width: 9.199999809265137,
    height: 9.19999885559082,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_16281_1364_713: {
    width: 3.3703079223632812,
    height: 2.6731395721435547,
    top: 0.12567138671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.1895751953125
  },
  ImageBackground_I1378_16281_1364_715: {
    width: 2.113673686981201,
    height: 3.861211061477661,
    top: 3.85614013671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.0693359375
  },
  ImageBackground_I1378_16281_1364_717: {
    width: 4.0476789474487305,
    height: 1.6777453422546387,
    top: 7.20001220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.5762939453125
  },
  ImageBackground_I1378_16281_1364_719: {
    width: 2.1152143478393555,
    height: 3.860804319381714,
    top: 3.8565673828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.0166015625
  },
  ImageBackground_I1378_16281_1364_721: {
    width: 3.369419813156128,
    height: 2.6729161739349365,
    top: 0.12591552734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.6429443359375
  },
  ImageBackground_I1378_16281_1364_723: {
    width: 3.915950298309326,
    height: 3.763637065887451,
    top: 2.5091552734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.64501953125
  },
  View_2: { height: 1258 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
