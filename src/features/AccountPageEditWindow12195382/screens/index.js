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
        style={styles.ImageBackground_1378_13693}
      />
      <View style={styles.View_1378_13694} />
      <View style={styles.View_1378_13695}>
        <Text style={styles.Text_1378_13695}>My Account</Text>
      </View>
      <View style={styles.View_1378_13696}>
        <View style={styles.View_I1378_13696_200_649} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c8a/dfd6/6b80ee4cb3d2d137fd351959b6ee251f"
          }}
          style={styles.ImageBackground_I1378_13696_200_655}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33fd/65ea/45cdc6e9be66a7f02bcafb88bff12b8f"
          }}
          style={styles.ImageBackground_I1378_13696_200_656}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e41/4dad/b9186fcb12118e6a2063346bab84e453"
          }}
          style={styles.ImageBackground_I1378_13696_282_5146}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/926f/9b31/37788a3e53bc1cad08fb891a371b0d71"
          }}
          style={styles.ImageBackground_I1378_13696_282_5147}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11a0/81a1/a78833a04721af7363b42f726483b0ca"
          }}
          style={styles.ImageBackground_I1378_13696_282_5148}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c447/5112/eadcf61a2474657e24f19c27d7d7466d"
          }}
          style={styles.ImageBackground_I1378_13696_616_1412}
        />
      </View>
      <View style={styles.View_1378_13697}>
        <Text style={styles.Text_1378_13697}>My points : 167</Text>
      </View>
      <View style={styles.View_1378_13698}>
        <View style={styles.View_1378_13699}>
          <Text style={styles.Text_1378_13699}>Show share on Facebook</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1af1/68e5/b4921f0d2978a7f28319694243480664"
          }}
          style={styles.ImageBackground_1378_13700}
        />
      </View>
      <View style={styles.View_1378_13701}>
        <View style={styles.View_1378_13702} />
        <View style={styles.View_1378_13703}>
          <Text style={styles.Text_1378_13703}>Everett Hansen</Text>
        </View>
        <View style={styles.View_1378_13704}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17fb/168d/ed4147f953fa0612d8f5917dd8c23f46"
            }}
            style={styles.ImageBackground_1378_13705}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f92/7b6c/0ada94aae56d6dcda6d9e738034be73b"
            }}
            style={styles.ImageBackground_1378_13706}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2717/71e1/508edd8c700b9676af7fb952e49e1149"
          }}
          style={styles.ImageBackground_1378_13707}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4201/1982/c9301278ae507fd49604b088991f066d"
        }}
        style={styles.ImageBackground_1378_13708}
      />
      <View style={styles.View_1378_13709}>
        <Text style={styles.Text_1378_13709}> national Team</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/071f/97ca/070832d3cee0840bab072fa45fd4ffa3"
        }}
        style={styles.ImageBackground_1378_13710}
      />
      <View style={styles.View_1378_13711}>
        <Text style={styles.Text_1378_13711}>Change Team </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49af/2e4a/11248e030e979474a2fa15e42728807b"
        }}
        style={styles.ImageBackground_1378_13712}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de13/05a4/112de62ce32c31da10ee415b663a623d"
        }}
        style={styles.ImageBackground_1378_13713}
      />
      <View style={styles.View_1378_13714} />
      <View style={styles.View_1378_13715} />
      <View style={styles.View_1378_13716} />
      <View style={styles.View_1378_13717} />
      <View style={styles.View_1378_13718} />
      <View style={styles.View_1378_13719} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e326/b6f0/070be7be5070c64319c6d5ec684c36ed"
        }}
        style={styles.ImageBackground_1378_13720}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ecf/95cd/2c457125f6bb5ad0ede5afa24064d981"
        }}
        style={styles.ImageBackground_1378_13721}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53ee/a8ab/bd0c11554276a7613ee25b86f8d35700"
        }}
        style={styles.ImageBackground_1378_13722}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0946/395e/68d471f93a76a9f2d6063c00fc4dede7"
        }}
        style={styles.ImageBackground_1378_13723}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c43/4d71/c64ca110b033fce7d6577a0983df39f0"
        }}
        style={styles.ImageBackground_1378_13724}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00f6/526f/af712d47ff932898180623b736c15a07"
        }}
        style={styles.ImageBackground_1378_13725}
      />
      <View style={styles.View_1378_13726}>
        <Text style={styles.Text_1378_13726}>Liga MX</Text>
      </View>
      <View style={styles.View_1378_13727}>
        <Text style={styles.Text_1378_13727}>Premier League</Text>
      </View>
      <View style={styles.View_1378_13728}>
        <Text style={styles.Text_1378_13728}>SAF</Text>
      </View>
      <View style={styles.View_1378_13729}>
        <Text style={styles.Text_1378_13729}>MLS</Text>
      </View>
      <View style={styles.View_1378_13730}>
        <Text style={styles.Text_1378_13730}>Bundesliga</Text>
      </View>
      <View style={styles.View_1378_13731}>
        <Text style={styles.Text_1378_13731}>LA liga</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c602/8bfa/402f5112b4c410673211b6f89ca60c66"
        }}
        style={styles.ImageBackground_1378_13732}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/489d/7527/2d5b59b210735745efb040fee4cee279"
        }}
        style={styles.ImageBackground_1378_13733}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b585/d9c4/2119186b2bfa89f822352d871a2a8415"
        }}
        style={styles.ImageBackground_1378_13734}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5101/08f9/e12b81a9c168dec191b87b25f379cbad"
        }}
        style={styles.ImageBackground_1378_13735}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/764b/07b5/1197196cd334e0abbef3148649079a3d"
        }}
        style={styles.ImageBackground_1378_13736}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b0e/f07b/a81480696b723f433d4d29674462f4e1"
        }}
        style={styles.ImageBackground_1378_13737}
      />
      <View style={styles.View_1378_13738}>
        <Text style={styles.Text_1378_13738}>Liverpool</Text>
      </View>
      <View style={styles.View_1378_13739}>
        <Text style={styles.Text_1378_13739}>Chelsea</Text>
      </View>
      <View style={styles.View_1378_13740}>
        <Text style={styles.Text_1378_13740}>Manchester City</Text>
      </View>
      <View style={styles.View_1378_13741}>
        <Text style={styles.Text_1378_13741}>Newcastle United</Text>
      </View>
      <View style={styles.View_1378_13742}>
        <Text style={styles.Text_1378_13742}>Manchester United</Text>
      </View>
      <View style={styles.View_1378_13743}>
        <View style={styles.View_1378_13744} />
        <View style={styles.View_1378_13745}>
          <Text style={styles.Text_1378_13745}>View transaction history</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0b4/d5af/b7541f4de3f858ad8670785566f82889"
        }}
        style={styles.ImageBackground_1378_13746}
      />
      <View style={styles.View_1378_13747}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7443/dda1/7b51859be688164435b2af746223e72d"
          }}
          style={styles.ImageBackground_I1378_13747_282_6132}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7892/c1ea/de3f766dda80bddeaaca16dbe3647481"
          }}
          style={styles.ImageBackground_I1378_13747_988_6517}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b3f/e3fb/7db2d0b297f2e1a6c142be9c13729ca7"
          }}
          style={styles.ImageBackground_I1378_13747_988_6519}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20e6/a9d7/a808783b1a426c2d8d35eec3c80c4546"
          }}
          style={styles.ImageBackground_I1378_13747_988_6521}
        />
        <View style={styles.View_I1378_13747_988_6522}>
          <Text style={styles.Text_I1378_13747_988_6522}>Home</Text>
        </View>
        <View style={styles.View_I1378_13747_1364_3889}>
          <Text style={styles.Text_I1378_13747_1364_3889}>Results</Text>
        </View>
        <View style={styles.View_I1378_13747_988_6523}>
          <Text style={styles.Text_I1378_13747_988_6523}>History</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f87/946c/3ab8c968fc445931fe1ba6ec9e930ae9"
          }}
          style={styles.ImageBackground_I1378_13747_988_6524}
        />
        <View style={styles.View_I1378_13747_1364_676}>
          <View style={styles.View_I1378_13747_1364_677}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0a8/ceb9/7d14d4cf1aac5331b12b0e3ead2bf7dd"
              }}
              style={styles.ImageBackground_I1378_13747_1364_678}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09c2/2175/507dc86c48ca17d66c7029c154ce5b2c"
              }}
              style={styles.ImageBackground_I1378_13747_1364_682}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e8e/21b4/9cbc39cb1c85fdbc22f2e7a141a74a80"
              }}
              style={styles.ImageBackground_I1378_13747_1364_684}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aad3/6c55/940837b04537e41909ae352fbbb04d32"
              }}
              style={styles.ImageBackground_I1378_13747_1364_686}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0eff/a0f3/74ccd44d9775c70cd68d2c38af17e92d"
              }}
              style={styles.ImageBackground_I1378_13747_1364_688}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cdb/13ff/2a5c1b5900421cb08c2b0ce2c7e119a7"
              }}
              style={styles.ImageBackground_I1378_13747_1364_690}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82e5/2ac0/2354ae66fa38914669617f8d242c1963"
              }}
              style={styles.ImageBackground_I1378_13747_1364_692}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_13747_1364_694}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82e5/2ac0/2354ae66fa38914669617f8d242c1963"
              }}
              style={styles.ImageBackground_I1378_13747_1364_696}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_13747_1364_698}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_13747_1364_700}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cdc/6045/dbc06947304927748b610ea000f55d73"
              }}
              style={styles.ImageBackground_I1378_13747_1364_702}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/720b/17b3/16ce33446d37af6c6285cc39c2270cc9"
              }}
              style={styles.ImageBackground_I1378_13747_1364_704}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cded/aea6/3ba0e67f257c63a7bdf60f41772bf286"
              }}
              style={styles.ImageBackground_I1378_13747_1364_706}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cded/aea6/3ba0e67f257c63a7bdf60f41772bf286"
              }}
              style={styles.ImageBackground_I1378_13747_1364_708}
            />
          </View>
          <View style={styles.View_I1378_13747_1364_710}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6c9/c4bc/f5025ebf9fa21253256e8e6609c12f95"
              }}
              style={styles.ImageBackground_I1378_13747_1364_711}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/871f/5cef/8cedd9500a12408982f2e93fea88bb62"
              }}
              style={styles.ImageBackground_I1378_13747_1364_713}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d07/0616/e9f729e081d510fa1e2c9979c6098443"
              }}
              style={styles.ImageBackground_I1378_13747_1364_715}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2475/5ccc/94641c3e81d91e9b3057e334dede2698"
              }}
              style={styles.ImageBackground_I1378_13747_1364_717}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8cd/ebf9/8269319277d39e1d4e040e0ed92180ed"
              }}
              style={styles.ImageBackground_I1378_13747_1364_719}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9eba/d401/4a377409d3c95f7296fa162b363831e2"
              }}
              style={styles.ImageBackground_I1378_13747_1364_721}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f112/243b/2b142e314a54e1abb992ac34be8c08d4"
              }}
              style={styles.ImageBackground_I1378_13747_1364_723}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/071f/97ca/070832d3cee0840bab072fa45fd4ffa3"
        }}
        style={styles.ImageBackground_1378_13748}
      />
      <View style={styles.View_1378_13749} />
      <View style={styles.View_1378_13750}>
        <Text style={styles.Text_1378_13750}>Language</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29b6/9ad8/581179fa29887690df58b8e7969d9a01"
        }}
        style={styles.ImageBackground_1378_13751}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5019/b533/b7c98402c6cd376b68eaf2dc63b2e166"
        }}
        style={styles.ImageBackground_1378_13752}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_1378_13693: {
    width: 696,
    minWidth: 696,
    height: 1621,
    minHeight: 1621,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -160,
    top: -83
  },
  View_1378_13694: {
    width: 342,
    minWidth: 342,
    height: 1113,
    minHeight: 1113,
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
  View_1378_13695: {
    width: 76,
    minWidth: 76,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 149,
    top: 93
  },
  Text_1378_13695: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13696: {
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
  View_I1378_13696_200_649: {
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
  ImageBackground_I1378_13696_200_655: {
    flexGrow: 1,
    width: 68.78099822998047,
    height: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 10
  },
  ImageBackground_I1378_13696_200_656: {
    flexGrow: 1,
    width: 10,
    height: 6.110935688018799,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 344,
    top: 14
  },
  ImageBackground_I1378_13696_282_5146: {
    flexGrow: 1,
    width: 33,
    height: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 232,
    top: 6
  },
  ImageBackground_I1378_13696_282_5147: {
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
  ImageBackground_I1378_13696_282_5148: {
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
  ImageBackground_I1378_13696_616_1412: {
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
  View_1378_13697: {
    width: 98,
    minWidth: 98,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 138,
    top: 339
  },
  Text_1378_13697: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13698: {
    width: 177,
    minWidth: 177,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 98,
    top: 362
  },
  View_1378_13699: {
    width: 146,
    minWidth: 146,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 5
  },
  Text_1378_13699: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  ImageBackground_1378_13700: {
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
  View_1378_13701: {
    width: 152,
    minWidth: 152,
    height: 200,
    minHeight: 200,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 110.99993896484375,
    top: 123.99996948242188
  },
  View_1378_13702: {
    width: 152,
    minWidth: 152,
    height: 200,
    minHeight: 200,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(13, 37, 109, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1378_13703: {
    width: 74,
    minWidth: 74,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 39.00006103515625,
    top: 143.91726684570312
  },
  Text_1378_13703: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8.8648042678833,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13704: {
    width: 47.684051513671875,
    minWidth: 47.684051513671875,
    height: 18.16541290283203,
    minHeight: 18.16541290283203,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 49.684326171875,
    top: 162.218017578125
  },
  ImageBackground_1378_13705: {
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
  ImageBackground_1378_13706: {
    width: 19.300752639770508,
    minWidth: 19.300752639770508,
    height: 13.624059677124023,
    minHeight: 13.624059677124023,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28.38330078125,
    top: 2.270751953125,
    resizeMode: "cover"
  },
  ImageBackground_1378_13707: {
    width: 127.15789794921875,
    minWidth: 127.15789794921875,
    height: 119.21052551269531,
    minHeight: 119.21052551269531,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.48876953125,
    top: 14.48876953125
  },
  ImageBackground_1378_13708: {
    width: 32,
    minWidth: 32,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 280,
    top: 469,
    resizeMode: "cover"
  },
  View_1378_13709: {
    width: 120,
    minWidth: 120,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 470
  },
  Text_1378_13709: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_13710: {
    width: 9.892087936401367,
    minWidth: 9.892087936401367,
    height: 6.781851768493652,
    minHeight: 6.781851768493652,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 323,
    top: 474.99988651275635
  },
  View_1378_13711: {
    width: 133.9274139404297,
    minWidth: 133.9274139404297,
    minHeight: 15.155004501342773,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    top: 524
  },
  Text_1378_13711: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_13712: {
    width: 10.671506881713867,
    minWidth: 10.671506881713867,
    height: 7.316208362579346,
    minHeight: 7.316208362579346,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 322.9998779296875,
    top: 526.9999542236328
  },
  ImageBackground_1378_13713: {
    width: 33,
    minWidth: 33,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 279,
    top: 515,
    resizeMode: "cover"
  },
  View_1378_13714: {
    width: 321,
    minWidth: 321,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 508,
    borderColor: "rgba(13, 37, 109, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1378_13715: {
    width: 321,
    minWidth: 321,
    height: 292,
    minHeight: 292,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 552,
    borderColor: "rgba(13, 37, 109, 1)",
    borderWidth: 1
  },
  View_1378_13716: {
    width: 321,
    minWidth: 321,
    height: 242,
    minHeight: 242,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 843,
    borderColor: "rgba(13, 37, 109, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1378_13717: {
    width: 321,
    minWidth: 321,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 455,
    borderColor: "rgba(13, 37, 109, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1378_13718: {
    width: 320,
    minWidth: 320,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 606,
    backgroundColor: "rgba(90, 131, 255, 1)",
    opacity: 0.800000011920929
  },
  View_1378_13719: {
    width: 321,
    minWidth: 321,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 1035,
    backgroundColor: "rgba(90, 131, 255, 1)",
    opacity: 0.800000011920929,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_1378_13720: {
    width: 39,
    minWidth: 39,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 567,
    resizeMode: "cover"
  },
  ImageBackground_1378_13721: {
    width: 34,
    minWidth: 34,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 39,
    top: 751,
    resizeMode: "cover"
  },
  ImageBackground_1378_13722: {
    width: 36,
    minWidth: 36,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 613,
    resizeMode: "cover"
  },
  ImageBackground_1378_13723: {
    width: 32,
    minWidth: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 797,
    resizeMode: "cover"
  },
  ImageBackground_1378_13724: {
    width: 35,
    minWidth: 35,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    top: 662,
    resizeMode: "cover"
  },
  ImageBackground_1378_13725: {
    width: 27,
    minWidth: 27,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42,
    top: 709,
    resizeMode: "cover"
  },
  View_1378_13726: {
    width: 48,
    minWidth: 48,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 88,
    top: 575
  },
  Text_1378_13726: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13727: {
    width: 91,
    minWidth: 91,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 88,
    top: 626
  },
  Text_1378_13727: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13728: {
    width: 24,
    minWidth: 24,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 89,
    top: 671
  },
  Text_1378_13728: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13729: {
    width: 27,
    minWidth: 27,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 86,
    top: 716
  },
  Text_1378_13729: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13730: {
    width: 65,
    minWidth: 65,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 86,
    top: 761
  },
  Text_1378_13730: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13731: {
    width: 44,
    minWidth: 44,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 87,
    top: 806
  },
  Text_1378_13731: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_13732: {
    width: 13,
    minWidth: 13,
    height: 13.000001907348633,
    minHeight: 13.000001907348633,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 320,
    top: 627
  },
  ImageBackground_1378_13733: {
    width: 37,
    minWidth: 37,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36,
    top: 993,
    resizeMode: "cover"
  },
  ImageBackground_1378_13734: {
    width: 34,
    minWidth: 34,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 1043,
    resizeMode: "cover"
  },
  ImageBackground_1378_13735: {
    width: 27,
    minWidth: 27,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 851,
    resizeMode: "cover"
  },
  ImageBackground_1378_13736: {
    width: 37,
    minWidth: 37,
    height: 37,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 903,
    resizeMode: "cover"
  },
  ImageBackground_1378_13737: {
    width: 37,
    minWidth: 37,
    height: 37,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 949,
    resizeMode: "cover"
  },
  View_1378_13738: {
    width: 53,
    minWidth: 53,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 84,
    top: 870
  },
  Text_1378_13738: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13739: {
    width: 47,
    minWidth: 47,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 84,
    top: 915
  },
  Text_1378_13739: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13740: {
    width: 94,
    minWidth: 94,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 84,
    top: 960
  },
  Text_1378_13740: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13741: {
    width: 102,
    minWidth: 102,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 84,
    top: 1005
  },
  Text_1378_13741: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13742: {
    width: 110,
    minWidth: 110,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 84,
    top: 1054
  },
  Text_1378_13742: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13743: {
    width: 192,
    minWidth: 192,
    height: 47,
    minHeight: 47,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 91,
    top: 1108
  },
  View_1378_13744: {
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
  View_1378_13745: {
    width: 152,
    top: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24
  },
  Text_1378_13745: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  ImageBackground_1378_13746: {
    width: 17,
    height: 17,
    top: 145,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 227
  },
  View_1378_13747: {
    width: 375,
    minWidth: 375,
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1207,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1378_13747_282_6132: {
    flexGrow: 1,
    width: 375,
    height: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I1378_13747_988_6517: {
    flexGrow: 1,
    width: 49.65380859375,
    height: 6.837890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 110,
    top: 36
  },
  ImageBackground_I1378_13747_988_6519: {
    flexGrow: 1,
    width: 30.00023651123047,
    height: 19.159626007080078,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 10
  },
  ImageBackground_I1378_13747_988_6521: {
    flexGrow: 1,
    width: 20,
    height: 18.33333396911621,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 11
  },
  View_I1378_13747_988_6522: {
    flexGrow: 1,
    width: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 34
  },
  Text_I1378_13747_988_6522: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1378_13747_1364_3889: {
    flexGrow: 1,
    width: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 217,
    top: 34
  },
  Text_I1378_13747_1364_3889: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1378_13747_988_6523: {
    flexGrow: 1,
    width: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 311,
    top: 34
  },
  Text_I1378_13747_988_6523: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_I1378_13747_988_6524: {
    flexGrow: 1,
    width: 20,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 314.763671875,
    top: 11
  },
  View_I1378_13747_1364_676: {
    flexGrow: 1,
    width: 26.763774871826172,
    height: 21.32741928100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 219,
    top: 9
  },
  View_I1378_13747_1364_677: {
    width: 26.763774871826172,
    height: 21.32741928100586,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_13747_1364_678: {
    width: 26.763774871826172,
    height: 7.109440326690674,
    top: 14.2177734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_13747_1364_682: {
    width: 3.029043436050415,
    height: 5.436952590942383,
    top: 15.89044189453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.700439453125
  },
  ImageBackground_I1378_13747_1364_684: {
    width: 1.4359464645385742,
    height: 2.9269301891326904,
    top: 16.3094482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.00128173828125
  },
  ImageBackground_I1378_13747_1364_686: {
    width: 1.634328842163086,
    height: 2.510079860687256,
    top: 18.81707763671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.42901611328125
  },
  ImageBackground_I1378_13747_1364_688: {
    width: 2.2307350635528564,
    height: 3.76133394241333,
    top: 14.21844482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.23651123046875
  },
  ImageBackground_I1378_13747_1364_690: {
    width: 1.4360383749008179,
    height: 2.926727533340454,
    top: 16.3094482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.3260498046875
  },
  ImageBackground_I1378_13747_1364_692: {
    width: 3.6636908054351807,
    height: 0.836363673210144,
    top: 15.890869140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.06634521484375
  },
  ImageBackground_I1378_13747_1364_694: {
    width: 4.219037055969238,
    height: 0.836363673210144,
    top: 18.81817626953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.42901611328125
  },
  ImageBackground_I1378_13747_1364_696: {
    width: 3.901637077331543,
    height: 0.836363673210144,
    top: 17.14544677734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.632080078125
  },
  ImageBackground_I1378_13747_1364_698: {
    width: 4.363308906555176,
    height: 0.836363673210144,
    top: 16.3092041015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.5999755859375
  },
  ImageBackground_I1378_13747_1364_700: {
    width: 4.324418067932129,
    height: 0.836363673210144,
    top: 16.3092041015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.8389892578125
  },
  ImageBackground_I1378_13747_1364_702: {
    width: 10.761491775512695,
    height: 0.836363673210144,
    top: 18.39984130859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.00128173828125
  },
  ImageBackground_I1378_13747_1364_704: {
    width: 13.381818771362305,
    height: 17.98181915283203,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.6907958984375
  },
  ImageBackground_I1378_13747_1364_706: {
    width: 6.869472980499268,
    height: 0.836363673210144,
    top: 14.21820068359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.18206787109375
  },
  ImageBackground_I1378_13747_1364_708: {
    width: 6.8698930740356445,
    height: 0.836363673210144,
    top: 14.21820068359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.7122802734375
  },
  View_I1378_13747_1364_710: {
    width: 9.199999809265137,
    height: 9.19999885559082,
    top: 2.0888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.7757568359375
  },
  ImageBackground_I1378_13747_1364_711: {
    width: 9.199999809265137,
    height: 9.19999885559082,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_13747_1364_713: {
    width: 3.3703079223632812,
    height: 2.6731395721435547,
    top: 0.12567138671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.1895751953125
  },
  ImageBackground_I1378_13747_1364_715: {
    width: 2.113673686981201,
    height: 3.861211061477661,
    top: 3.85614013671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.0693359375
  },
  ImageBackground_I1378_13747_1364_717: {
    width: 4.0476789474487305,
    height: 1.6777453422546387,
    top: 7.20001220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.5762939453125
  },
  ImageBackground_I1378_13747_1364_719: {
    width: 2.1152143478393555,
    height: 3.860804319381714,
    top: 3.8565673828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.0166015625
  },
  ImageBackground_I1378_13747_1364_721: {
    width: 3.369419813156128,
    height: 2.6729161739349365,
    top: 0.12591552734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.6429443359375
  },
  ImageBackground_I1378_13747_1364_723: {
    width: 3.915950298309326,
    height: 3.763637065887451,
    top: 2.5091552734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.64501953125
  },
  ImageBackground_1378_13748: {
    width: 9.892087936401367,
    minWidth: 9.892087936401367,
    height: 6.781851768493652,
    minHeight: 6.781851768493652,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 326,
    top: 423.99988555908203
  },
  View_1378_13749: {
    width: 321,
    minWidth: 321,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 402,
    borderColor: "rgba(13, 37, 109, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1378_13750: {
    width: 62,
    minWidth: 62,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 418
  },
  Text_1378_13750: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_13751: {
    width: 33,
    minWidth: 33,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 282,
    top: 417,
    resizeMode: "cover"
  },
  ImageBackground_1378_13752: {
    width: 9,
    height: 9,
    top: 270,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 228
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
