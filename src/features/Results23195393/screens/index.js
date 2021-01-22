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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1ad/d11a/740fb5fe5096621142cf2da2eb8921f9"
        }}
        style={styles.ImageBackground_1378_14992}
      />
      <View style={styles.View_1378_14993} />
      <View style={styles.View_1378_14994}>
        <View style={styles.View_1378_14995} />
        <View style={styles.View_1378_14996} />
      </View>
      <View style={styles.View_1378_14997}>
        <View style={styles.View_1378_14998} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f832/d629/bd48902a0a9e223e3b2b1dc60744639d"
          }}
          style={styles.ImageBackground_1378_14999}
        />
      </View>
      <View style={styles.View_1378_15000} />
      <View style={styles.View_1378_15001}>
        <View style={styles.View_1378_15002}>
          <View style={styles.View_1378_15003}>
            <View style={styles.View_1378_15004}>
              <Text style={styles.Text_1378_15004}>Manchester</Text>
            </View>
            <View style={styles.View_1378_15005}>
              <Text style={styles.Text_1378_15005}>Liverpool</Text>
            </View>
            <View style={styles.View_1378_15006}>
              <Text style={styles.Text_1378_15006}>1 - 0</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
              }}
              style={styles.ImageBackground_1378_15007}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
              }}
              style={styles.ImageBackground_1378_15008}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1378_15009}>
        <View style={styles.View_1378_15010}>
          <View style={styles.View_1378_15011}>
            <View style={styles.View_1378_15012}>
              <Text style={styles.Text_1378_15012}>Manchester</Text>
            </View>
            <View style={styles.View_1378_15013}>
              <Text style={styles.Text_1378_15013}>Liverpool</Text>
            </View>
            <View style={styles.View_1378_15014}>
              <Text style={styles.Text_1378_15014}>1 - 0</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
              }}
              style={styles.ImageBackground_1378_15015}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
              }}
              style={styles.ImageBackground_1378_15016}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1378_15017}>
        <View style={styles.View_1378_15018}>
          <View style={styles.View_1378_15019}>
            <View style={styles.View_1378_15020}>
              <Text style={styles.Text_1378_15020}>Manchester</Text>
            </View>
            <View style={styles.View_1378_15021}>
              <Text style={styles.Text_1378_15021}>Liverpool</Text>
            </View>
            <View style={styles.View_1378_15022}>
              <Text style={styles.Text_1378_15022}>1 - 0</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
              }}
              style={styles.ImageBackground_1378_15023}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
              }}
              style={styles.ImageBackground_1378_15024}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1378_15025}>
        <View style={styles.View_1378_15026}>
          <View style={styles.View_1378_15027}>
            <View style={styles.View_1378_15028}>
              <Text style={styles.Text_1378_15028}>Manchester</Text>
            </View>
            <View style={styles.View_1378_15029}>
              <Text style={styles.Text_1378_15029}>Liverpool</Text>
            </View>
            <View style={styles.View_1378_15030}>
              <Text style={styles.Text_1378_15030}>1 - 0</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
              }}
              style={styles.ImageBackground_1378_15031}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
              }}
              style={styles.ImageBackground_1378_15032}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1378_15033}>
        <View style={styles.View_1378_15034}>
          <View style={styles.View_1378_15035}>
            <View style={styles.View_1378_15036}>
              <Text style={styles.Text_1378_15036}>Manchester</Text>
            </View>
            <View style={styles.View_1378_15037}>
              <Text style={styles.Text_1378_15037}>Liverpool</Text>
            </View>
            <View style={styles.View_1378_15038}>
              <Text style={styles.Text_1378_15038}>1 - 0</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
              }}
              style={styles.ImageBackground_1378_15039}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
              }}
              style={styles.ImageBackground_1378_15040}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1378_15041}>
        <View style={styles.View_1378_15042}>
          <View style={styles.View_1378_15043}>
            <View style={styles.View_1378_15044}>
              <Text style={styles.Text_1378_15044}>Manchester</Text>
            </View>
            <View style={styles.View_1378_15045}>
              <Text style={styles.Text_1378_15045}>Liverpool</Text>
            </View>
            <View style={styles.View_1378_15046}>
              <Text style={styles.Text_1378_15046}>18:00 </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
              }}
              style={styles.ImageBackground_1378_15047}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
              }}
              style={styles.ImageBackground_1378_15048}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1378_15049}>
        <View style={styles.View_1378_15050}>
          <View style={styles.View_1378_15051}>
            <View style={styles.View_1378_15052}>
              <Text style={styles.Text_1378_15052}>Manchester</Text>
            </View>
            <View style={styles.View_1378_15053}>
              <Text style={styles.Text_1378_15053}>Liverpool</Text>
            </View>
            <View style={styles.View_1378_15054}>
              <Text style={styles.Text_1378_15054}>19:30</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
              }}
              style={styles.ImageBackground_1378_15055}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
              }}
              style={styles.ImageBackground_1378_15056}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1378_15057}>
        <View style={styles.View_1378_15058}>
          <View style={styles.View_1378_15059}>
            <View style={styles.View_1378_15060}>
              <Text style={styles.Text_1378_15060}>Manchester</Text>
            </View>
            <View style={styles.View_1378_15061}>
              <Text style={styles.Text_1378_15061}>Liverpool</Text>
            </View>
            <View style={styles.View_1378_15062}>
              <Text style={styles.Text_1378_15062}>20:30</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
              }}
              style={styles.ImageBackground_1378_15063}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
              }}
              style={styles.ImageBackground_1378_15064}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1378_15065}>
        <View style={styles.View_1378_15066}>
          <View style={styles.View_1378_15067}>
            <View style={styles.View_1378_15068}>
              <Text style={styles.Text_1378_15068}>Manchester</Text>
            </View>
            <View style={styles.View_1378_15069}>
              <Text style={styles.Text_1378_15069}>Liverpool</Text>
            </View>
            <View style={styles.View_1378_15070}>
              <Text style={styles.Text_1378_15070}>20:30</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
              }}
              style={styles.ImageBackground_1378_15071}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
              }}
              style={styles.ImageBackground_1378_15072}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1378_15073}>
        <Text style={styles.Text_1378_15073}>soon</Text>
      </View>
      <View style={styles.View_1378_15074}>
        <Text style={styles.Text_1378_15074}>soon</Text>
      </View>
      <View style={styles.View_1378_15075}>
        <Text style={styles.Text_1378_15075}>soon</Text>
      </View>
      <View style={styles.View_1378_15076}>
        <Text style={styles.Text_1378_15076}>soon</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
        }}
        style={styles.ImageBackground_1378_15077}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
        }}
        style={styles.ImageBackground_1378_15078}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
        }}
        style={styles.ImageBackground_1378_15079}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
        }}
        style={styles.ImageBackground_1378_15080}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
        }}
        style={styles.ImageBackground_1378_15081}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
        }}
        style={styles.ImageBackground_1378_15082}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
        }}
        style={styles.ImageBackground_1378_15083}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
        }}
        style={styles.ImageBackground_1378_15084}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
        }}
        style={styles.ImageBackground_1378_15085}
      />
      <View style={styles.View_1378_15086}>
        <View style={styles.View_1378_15087} />
        <View style={styles.View_1378_15088}>
          <Text style={styles.Text_1378_15088}>BET NOW</Text>
        </View>
      </View>
      <View style={styles.View_1378_15089}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e8f/c737/d841c7c2c1ac385ba64f458998ba834f"
          }}
          style={styles.ImageBackground_1378_15090}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/782e/0f29/f5935e1bdfc7a4c3f0da0d3801681dd2"
          }}
          style={styles.ImageBackground_1378_15091}
        />
      </View>
      <View style={styles.View_1378_15092}>
        <View style={styles.View_1378_15093} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c8a/dfd6/6b80ee4cb3d2d137fd351959b6ee251f"
          }}
          style={styles.ImageBackground_1378_15094}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33fd/65ea/45cdc6e9be66a7f02bcafb88bff12b8f"
          }}
          style={styles.ImageBackground_1378_15095}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e41/4dad/b9186fcb12118e6a2063346bab84e453"
          }}
          style={styles.ImageBackground_1378_15096}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/926f/9b31/37788a3e53bc1cad08fb891a371b0d71"
          }}
          style={styles.ImageBackground_1378_15097}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11a0/81a1/a78833a04721af7363b42f726483b0ca"
          }}
          style={styles.ImageBackground_1378_15098}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9a8/afad/5f4af3f5988c01252253a00e0279c412"
          }}
          style={styles.ImageBackground_1378_15099}
        />
      </View>
      <View style={styles.View_1378_15100}>
        <Text style={styles.Text_1378_15100}>MY TOTAL: 60 P</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/867b/b616/7656a34301d0758c029f20cadfed94dd"
        }}
        style={styles.ImageBackground_1378_15101}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b446/3be4/afb2ce9aea83a74493d7afc42afe656e"
        }}
        style={styles.ImageBackground_1378_15102}
      />
      <View style={styles.View_1378_15103}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6005/0493/8cb36d023c337fff693b650df66621e4"
          }}
          style={styles.ImageBackground_1378_15104}
        />
        <View style={styles.View_1378_15105}>
          <Text style={styles.Text_1378_15105}>4 856 081 P</Text>
        </View>
        <View style={styles.View_1378_15106}>
          <Text style={styles.Text_1378_15106}>prize fond</Text>
        </View>
      </View>
      <View style={styles.View_1378_15107}>
        <View style={styles.View_1378_15108}>
          <Text style={styles.Text_1378_15108}>0 hours 03 min 27 sec</Text>
        </View>
        <View style={styles.View_1378_15109}>
          <Text style={styles.Text_1378_15109}>Time remaining</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0a1/554f/f11be10fb224d4356ddfc1f2253994f3"
          }}
          style={styles.ImageBackground_1378_15110}
        />
      </View>
      <View style={styles.View_1378_15111}>
        <Text style={styles.Text_1378_15111}>DRAW № 496</Text>
      </View>
      <View style={styles.View_1378_15112}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c89d/a589/20bf081ef333d48a198451202b9c14f9"
          }}
          style={styles.ImageBackground_1378_15113}
        />
        <View style={styles.View_1378_15114}>
          <Text style={styles.Text_1378_15114}>Select match</Text>
        </View>
        <View style={styles.View_1378_15115}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee8c/8f2e/a9a5667fa32ddc09e159954afd4cefd8"
            }}
            style={styles.ImageBackground_1378_15116}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c65a/c7de/54b034669e8aacf797491cce69b0c03a"
          }}
          style={styles.ImageBackground_1378_15118}
        />
      </View>
      <View style={styles.View_1378_15119}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7443/dda1/7b51859be688164435b2af746223e72d"
          }}
          style={styles.ImageBackground_I1378_15119_282_6132}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7892/c1ea/de3f766dda80bddeaaca16dbe3647481"
          }}
          style={styles.ImageBackground_I1378_15119_988_6517}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e07/12cc/739bbfa85dbf18a22514ce366ea32313"
          }}
          style={styles.ImageBackground_I1378_15119_988_6519}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20e6/a9d7/a808783b1a426c2d8d35eec3c80c4546"
          }}
          style={styles.ImageBackground_I1378_15119_988_6521}
        />
        <View style={styles.View_I1378_15119_988_6522}>
          <Text style={styles.Text_I1378_15119_988_6522}>Home</Text>
        </View>
        <View style={styles.View_I1378_15119_1364_3889}>
          <Text style={styles.Text_I1378_15119_1364_3889}>Results</Text>
        </View>
        <View style={styles.View_I1378_15119_988_6523}>
          <Text style={styles.Text_I1378_15119_988_6523}>History</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f87/946c/3ab8c968fc445931fe1ba6ec9e930ae9"
          }}
          style={styles.ImageBackground_I1378_15119_988_6524}
        />
        <View style={styles.View_I1378_15119_1364_676}>
          <View style={styles.View_I1378_15119_1364_677}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccf6/9011/179c618ff78c5cd984a2452d79614ebd"
              }}
              style={styles.ImageBackground_I1378_15119_1364_678}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e76d/491b/0f8aa5f01eb0fc801b250ba4707ab2bf"
              }}
              style={styles.ImageBackground_I1378_15119_1364_682}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5465/5715/63c2be72cdbb9aa7fa59616f34aad3e1"
              }}
              style={styles.ImageBackground_I1378_15119_1364_684}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c967/3424/9dd7e9093027282c70ae67d56e8f469a"
              }}
              style={styles.ImageBackground_I1378_15119_1364_686}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/702a/472c/91facbf29c8d7d2d5803768fca2343f9"
              }}
              style={styles.ImageBackground_I1378_15119_1364_688}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9471/efd4/10cce3b0b22f8f48bdc991533861258f"
              }}
              style={styles.ImageBackground_I1378_15119_1364_690}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2188/1d94/d4f8a3c198f78fda519bfd23e9c5413b"
              }}
              style={styles.ImageBackground_I1378_15119_1364_692}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/752b/92b8/6e9c120e28b39590ae0a705e37d5d106"
              }}
              style={styles.ImageBackground_I1378_15119_1364_694}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2188/1d94/d4f8a3c198f78fda519bfd23e9c5413b"
              }}
              style={styles.ImageBackground_I1378_15119_1364_696}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/752b/92b8/6e9c120e28b39590ae0a705e37d5d106"
              }}
              style={styles.ImageBackground_I1378_15119_1364_698}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/752b/92b8/6e9c120e28b39590ae0a705e37d5d106"
              }}
              style={styles.ImageBackground_I1378_15119_1364_700}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d22/7ea2/701b553f1bec98f46857d36e05f97a6c"
              }}
              style={styles.ImageBackground_I1378_15119_1364_702}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7565/3d75/cb6608ce3863aa6bc97d199af9303671"
              }}
              style={styles.ImageBackground_I1378_15119_1364_704}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3462/0c0f/6ea8ce3dca4ebde9f403f9a6c8b24b80"
              }}
              style={styles.ImageBackground_I1378_15119_1364_706}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3462/0c0f/6ea8ce3dca4ebde9f403f9a6c8b24b80"
              }}
              style={styles.ImageBackground_I1378_15119_1364_708}
            />
          </View>
          <View style={styles.View_I1378_15119_1364_710}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603d/7ca2/4f85ca91c39adf393cea3886c278616d"
              }}
              style={styles.ImageBackground_I1378_15119_1364_711}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5443/12da/fa66fd7aa2c34d3a16ddf24f8543468e"
              }}
              style={styles.ImageBackground_I1378_15119_1364_713}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46bf/0aac/5ecca22937a1da82325e068448f31a8d"
              }}
              style={styles.ImageBackground_I1378_15119_1364_715}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec97/1a26/696728884ea37f4f234f0a088020f437"
              }}
              style={styles.ImageBackground_I1378_15119_1364_717}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f783/ed73/a5eabecc325fc9014dbb42337628fdce"
              }}
              style={styles.ImageBackground_I1378_15119_1364_719}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b39/0a3a/1f2ab0ef282551ff2292274fe36fe097"
              }}
              style={styles.ImageBackground_I1378_15119_1364_721}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4854/a4f8/1c167236a1ac33d45402c9a141e5b8d3"
              }}
              style={styles.ImageBackground_I1378_15119_1364_723}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1378_15120}>
        <Text style={styles.Text_1378_15120}>37’</Text>
      </View>
      <View style={styles.View_1378_15121}>
        <Text style={styles.Text_1378_15121}>17’</Text>
      </View>
      <View style={styles.View_1378_15122}>
        <Text style={styles.Text_1378_15122}>17’</Text>
      </View>
      <View style={styles.View_1378_15123}>
        <Text style={styles.Text_1378_15123}>12’</Text>
      </View>
      <View style={styles.View_1378_15124}>
        <Text style={styles.Text_1378_15124}>4’</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_1378_14992: {
    width: 375,
    minWidth: 375,
    height: 943,
    minHeight: 943,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_14993: {
    width: 341,
    minWidth: 341,
    height: 775,
    minHeight: 775,
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
  View_1378_14994: {
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
  View_1378_14995: {
    width: 341,
    height: 33,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    backgroundColor: "rgba(253, 253, 253, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1378_14996: {
    width: 21,
    height: 15.400001525878906,
    top: 8.800003051757812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 294,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1378_14997: {
    width: 341,
    minWidth: 341,
    height: 122,
    minHeight: 122,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 72
  },
  View_1378_14998: {
    width: 341,
    minWidth: 341,
    height: 122,
    minHeight: 122,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(1, 31, 135, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_1378_14999: {
    width: 341,
    minWidth: 341,
    height: 122,
    minHeight: 122,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15000: {
    width: 341.4996032714844,
    minWidth: 341.4996032714844,
    height: 121.82149505615234,
    minHeight: 121.82149505615234,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 72,
    backgroundColor: "rgba(1, 31, 135, 1)",
    opacity: 0.5799999833106995,
    borderTopLeftRadius: 9.985368728637695,
    borderTopRightRadius: 9.985368728637695,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1378_15001: {
    width: 287,
    minWidth: 287,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 448
  },
  View_1378_15002: {
    width: 287,
    minWidth: 287,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15003: {
    width: 287,
    minWidth: 287,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15004: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 11
  },
  Text_1378_15004: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15005: {
    width: 49,
    minWidth: 49,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 238,
    top: 11
  },
  Text_1378_15005: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15006: {
    width: 26,
    minWidth: 26,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 137,
    top: 0
  },
  Text_1378_15006: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15007: {
    width: 17,
    minWidth: 17,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 211,
    top: 1,
    resizeMode: "cover"
  },
  ImageBackground_1378_15008: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 3,
    resizeMode: "cover"
  },
  View_1378_15009: {
    width: 287,
    minWidth: 287,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 389
  },
  View_1378_15010: {
    width: 287,
    minWidth: 287,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15011: {
    width: 287,
    minWidth: 287,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15012: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 10
  },
  Text_1378_15012: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15013: {
    width: 49,
    minWidth: 49,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 238,
    top: 10
  },
  Text_1378_15013: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15014: {
    width: 26,
    minWidth: 26,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 137,
    top: 0
  },
  Text_1378_15014: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15015: {
    width: 17,
    minWidth: 17,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 211,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_1378_15016: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2,
    resizeMode: "cover"
  },
  View_1378_15017: {
    width: 287,
    minWidth: 287,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 328
  },
  View_1378_15018: {
    width: 287,
    minWidth: 287,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15019: {
    width: 287,
    minWidth: 287,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15020: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 10
  },
  Text_1378_15020: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15021: {
    width: 49,
    minWidth: 49,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 238,
    top: 10
  },
  Text_1378_15021: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15022: {
    width: 26,
    minWidth: 26,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 137,
    top: 2
  },
  Text_1378_15022: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15023: {
    width: 17,
    minWidth: 17,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 211,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_1378_15024: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2,
    resizeMode: "cover"
  },
  View_1378_15025: {
    width: 287,
    minWidth: 287,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 267
  },
  View_1378_15026: {
    width: 287,
    minWidth: 287,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15027: {
    width: 287,
    minWidth: 287,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15028: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 10
  },
  Text_1378_15028: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15029: {
    width: 49,
    minWidth: 49,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 238,
    top: 10
  },
  Text_1378_15029: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15030: {
    width: 26,
    minWidth: 26,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 137,
    top: 2
  },
  Text_1378_15030: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15031: {
    width: 17,
    minWidth: 17,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 211,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_1378_15032: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2,
    resizeMode: "cover"
  },
  View_1378_15033: {
    width: 287,
    minWidth: 287,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 209
  },
  View_1378_15034: {
    width: 287,
    minWidth: 287,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15035: {
    width: 287,
    minWidth: 287,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15036: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 11
  },
  Text_1378_15036: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15037: {
    width: 49,
    minWidth: 49,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 238,
    top: 11
  },
  Text_1378_15037: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15038: {
    width: 26,
    minWidth: 26,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 137,
    top: 0
  },
  Text_1378_15038: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15039: {
    width: 17,
    minWidth: 17,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 211,
    top: 1,
    resizeMode: "cover"
  },
  ImageBackground_1378_15040: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 3,
    resizeMode: "cover"
  },
  View_1378_15041: {
    width: 309.6960754394531,
    minWidth: 309.6960754394531,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 512
  },
  View_1378_15042: {
    width: 309.6960754394531,
    minWidth: 309.6960754394531,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15043: {
    width: 309.6960754394531,
    minWidth: 309.6960754394531,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15044: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 9
  },
  Text_1378_15044: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15045: {
    width: 71.6960678100586,
    minWidth: 71.6960678100586,
    minHeight: 15.208256721496582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 238,
    top: 9
  },
  Text_1378_15045: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15046: {
    width: 34,
    minWidth: 34,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 133,
    top: 14
  },
  Text_1378_15046: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15047: {
    width: 17,
    minWidth: 17,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 211,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_1378_15048: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  View_1378_15049: {
    width: 309.6960754394531,
    minWidth: 309.6960754394531,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 577
  },
  View_1378_15050: {
    width: 309.6960754394531,
    minWidth: 309.6960754394531,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15051: {
    width: 309.6960754394531,
    minWidth: 309.6960754394531,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15052: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 9
  },
  Text_1378_15052: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15053: {
    width: 71.6960678100586,
    minWidth: 71.6960678100586,
    minHeight: 15.208256721496582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 238,
    top: 9
  },
  Text_1378_15053: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15054: {
    width: 34,
    minWidth: 34,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 133,
    top: 14
  },
  Text_1378_15054: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15055: {
    width: 17,
    minWidth: 17,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 211,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_1378_15056: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  View_1378_15057: {
    width: 309.6960754394531,
    minWidth: 309.6960754394531,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 642
  },
  View_1378_15058: {
    width: 309.6960754394531,
    minWidth: 309.6960754394531,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15059: {
    width: 309.6960754394531,
    minWidth: 309.6960754394531,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15060: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 9
  },
  Text_1378_15060: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15061: {
    width: 71.6960678100586,
    minWidth: 71.6960678100586,
    minHeight: 15.208256721496582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 238,
    top: 9
  },
  Text_1378_15061: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15062: {
    width: 34,
    minWidth: 34,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 133,
    top: 14
  },
  Text_1378_15062: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15063: {
    width: 17,
    minWidth: 17,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 211,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_1378_15064: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  View_1378_15065: {
    width: 309.6960754394531,
    minWidth: 309.6960754394531,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 707
  },
  View_1378_15066: {
    width: 309.6960754394531,
    minWidth: 309.6960754394531,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15067: {
    width: 309.6960754394531,
    minWidth: 309.6960754394531,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15068: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 9
  },
  Text_1378_15068: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15069: {
    width: 71.6960678100586,
    minWidth: 71.6960678100586,
    minHeight: 15.208256721496582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 238,
    top: 9
  },
  Text_1378_15069: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15070: {
    width: 34,
    minWidth: 34,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 133,
    top: 14
  },
  Text_1378_15070: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15071: {
    width: 17,
    minWidth: 17,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 211,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_1378_15072: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  View_1378_15073: {
    width: 31,
    minWidth: 31,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175,
    top: 506
  },
  Text_1378_15073: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15074: {
    width: 31,
    minWidth: 31,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175,
    top: 571
  },
  Text_1378_15074: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15075: {
    width: 31,
    minWidth: 31,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175,
    top: 634
  },
  Text_1378_15075: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15076: {
    width: 31,
    minWidth: 31,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175,
    top: 701
  },
  Text_1378_15076: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15077: {
    width: 341,
    minWidth: 341,
    height: 0.000029811166314175352,
    minHeight: 0.000029811166314175352,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 251.99996948242188
  },
  ImageBackground_1378_15078: {
    width: 341,
    minWidth: 341,
    height: 0.000029811166314175352,
    minHeight: 0.000029811166314175352,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 312.9999694824219
  },
  ImageBackground_1378_15079: {
    width: 341,
    minWidth: 341,
    height: 0.000029811166314175352,
    minHeight: 0.000029811166314175352,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 373.9999694824219
  },
  ImageBackground_1378_15080: {
    width: 341,
    minWidth: 341,
    height: 0.000029811166314175352,
    minHeight: 0.000029811166314175352,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 432.9999694824219
  },
  ImageBackground_1378_15081: {
    width: 341,
    minWidth: 341,
    height: 0.000029811166314175352,
    minHeight: 0.000029811166314175352,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 490.9999694824219
  },
  ImageBackground_1378_15082: {
    width: 341,
    minWidth: 341,
    height: 0.000029811166314175352,
    minHeight: 0.000029811166314175352,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 555.9999694824219
  },
  ImageBackground_1378_15083: {
    width: 341,
    minWidth: 341,
    height: 0.000029811166314175352,
    minHeight: 0.000029811166314175352,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 620.9999694824219
  },
  ImageBackground_1378_15084: {
    width: 341,
    minWidth: 341,
    height: 0.000029811166314175352,
    minHeight: 0.000029811166314175352,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 685.9999694824219
  },
  ImageBackground_1378_15085: {
    width: 341,
    minWidth: 341,
    height: 0.000029811166314175352,
    minHeight: 0.000029811166314175352,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 751
  },
  View_1378_15086: {
    width: 134,
    minWidth: 134,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 772,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1378_15087: {
    width: 134,
    height: 41,
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
  View_1378_15088: {
    width: 61,
    top: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36
  },
  Text_1378_15088: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_15089: {
    width: 38,
    minWidth: 38,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 307.2890625,
    top: 773.5
  },
  ImageBackground_1378_15090: {
    width: 19,
    height: 18,
    top: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10
  },
  ImageBackground_1378_15091: {
    width: 38,
    minWidth: 38,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15092: {
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
  View_1378_15093: {
    width: 375,
    height: 52,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(253, 253, 253, 1)"
  },
  ImageBackground_1378_15094: {
    width: 68.78099822998047,
    height: 9,
    top: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270
  },
  ImageBackground_1378_15095: {
    width: 10,
    height: 6.110935688018799,
    top: 21.000091552734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 349
  },
  ImageBackground_1378_15096: {
    width: 33,
    height: 31,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 227
  },
  ImageBackground_1378_15097: {
    width: 12,
    height: 12,
    top: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 287,
    resizeMode: "cover"
  },
  ImageBackground_1378_15098: {
    width: 12,
    height: 9,
    top: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 271,
    resizeMode: "cover"
  },
  ImageBackground_1378_15099: {
    width: 115.28089904785156,
    height: 24.60260009765625,
    top: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    resizeMode: "cover"
  },
  View_1378_15100: {
    width: 66,
    top: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 271
  },
  Text_1378_15100: {
    color: "rgba(0, 28, 113, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_1378_15101: {
    width: 6.842105388641357,
    height: 13,
    top: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38
  },
  ImageBackground_1378_15102: {
    width: 6.840000152587891,
    height: 13,
    top: 87,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 330.31591796875
  },
  View_1378_15103: {
    width: 106.79479217529297,
    minWidth: 106.79479217529297,
    height: 29.004201889038086,
    minHeight: 29.004201889038086,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 39.205078125,
    top: 150.998046875
  },
  ImageBackground_1378_15104: {
    width: 31.293546676635742,
    height: 23.096546173095703,
    top: 2.5594482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1378_15105: {
    width: 69.76112365722656,
    minWidth: 69.76112365722656,
    minHeight: 15.313416481018066,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36.65087890625,
    top: 13.690811157226562
  },
  Text_1378_15105: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.565262794494629,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_15106: {
    width: 73.16410064697266,
    minWidth: 73.16410064697266,
    minHeight: 15.313416481018066,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.630859375,
    top: 0.000026702880859375
  },
  Text_1378_15106: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.565262794494629,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_15107: {
    width: 116.60650634765625,
    minWidth: 116.60650634765625,
    height: 24.743228912353516,
    minHeight: 24.743228912353516,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 219,
    top: 152.88623046875
  },
  View_1378_15108: {
    width: 90.82102966308594,
    minWidth: 90.82102966308594,
    minHeight: 10.790616989135742,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.785400390625,
    top: 13.95261001586914
  },
  Text_1378_15108: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7.137870788574219,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_15109: {
    width: 89.92180633544922,
    minWidth: 89.92180633544922,
    minHeight: 13.488271713256836,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24.256103515625,
    top: 0
  },
  Text_1378_15109: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.168508529663086,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_1378_15110: {
    width: 19.974679946899414,
    height: 24.31699562072754,
    top: 0.00012969970703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1378_15111: {
    width: 109,
    minWidth: 109,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 133,
    top: 85
  },
  Text_1378_15111: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15112: {
    width: 94.17778015136719,
    minWidth: 94.17778015136719,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 139.9111328125,
    top: 110,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1378_15113: {
    width: 94.17778015136719,
    height: 26,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1378_15114: {
    width: 53,
    top: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.0888671875
  },
  Text_1378_15114: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1378_15115: {
    width: 12,
    height: 12,
    top: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.0888671875,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1378_15116: {
    width: 12,
    height: 11.999669075012207,
    top: -1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1378_15118: {
    width: 7.999966144561768,
    height: 4.404754638671875,
    top: 12.000030517578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 79.0888671875
  },
  View_1378_15119: {
    width: 375,
    minWidth: 375,
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 891,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1378_15119_282_6132: {
    flexGrow: 1,
    width: 375,
    height: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I1378_15119_988_6517: {
    flexGrow: 1,
    width: 49.65380859375,
    height: 6.837890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 110,
    top: 36
  },
  ImageBackground_I1378_15119_988_6519: {
    flexGrow: 1,
    width: 30.00023651123047,
    height: 19.159626007080078,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 10
  },
  ImageBackground_I1378_15119_988_6521: {
    flexGrow: 1,
    width: 20,
    height: 18.33333396911621,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 11
  },
  View_I1378_15119_988_6522: {
    flexGrow: 1,
    width: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 34
  },
  Text_I1378_15119_988_6522: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1378_15119_1364_3889: {
    flexGrow: 1,
    width: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 217,
    top: 34
  },
  Text_I1378_15119_1364_3889: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1378_15119_988_6523: {
    flexGrow: 1,
    width: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 311,
    top: 34
  },
  Text_I1378_15119_988_6523: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_I1378_15119_988_6524: {
    flexGrow: 1,
    width: 20,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 314.763671875,
    top: 11
  },
  View_I1378_15119_1364_676: {
    flexGrow: 1,
    width: 26.763774871826172,
    height: 21.32741928100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 219,
    top: 9
  },
  View_I1378_15119_1364_677: {
    width: 26.763774871826172,
    height: 21.32741928100586,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_15119_1364_678: {
    width: 26.763774871826172,
    height: 7.109440326690674,
    top: 14.2177734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_15119_1364_682: {
    width: 3.029043436050415,
    height: 5.436952590942383,
    top: 15.89044189453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.700439453125
  },
  ImageBackground_I1378_15119_1364_684: {
    width: 1.4359464645385742,
    height: 2.9269301891326904,
    top: 16.3094482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.001220703125
  },
  ImageBackground_I1378_15119_1364_686: {
    width: 1.634328842163086,
    height: 2.510079860687256,
    top: 18.81707763671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.428955078125
  },
  ImageBackground_I1378_15119_1364_688: {
    width: 2.2307350635528564,
    height: 3.76133394241333,
    top: 14.21844482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.236572265625
  },
  ImageBackground_I1378_15119_1364_690: {
    width: 1.4360383749008179,
    height: 2.926727533340454,
    top: 16.3094482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.325927734375
  },
  ImageBackground_I1378_15119_1364_692: {
    width: 3.6636908054351807,
    height: 0.836363673210144,
    top: 15.890869140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.06640625
  },
  ImageBackground_I1378_15119_1364_694: {
    width: 4.219037055969238,
    height: 0.836363673210144,
    top: 18.81817626953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.428955078125
  },
  ImageBackground_I1378_15119_1364_696: {
    width: 3.901637077331543,
    height: 0.836363673210144,
    top: 17.14544677734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.632080078125
  },
  ImageBackground_I1378_15119_1364_698: {
    width: 4.363308906555176,
    height: 0.836363673210144,
    top: 16.3092041015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.599853515625
  },
  ImageBackground_I1378_15119_1364_700: {
    width: 4.324418067932129,
    height: 0.836363673210144,
    top: 16.3092041015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.8388671875
  },
  ImageBackground_I1378_15119_1364_702: {
    width: 10.761491775512695,
    height: 0.836363673210144,
    top: 18.39984130859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.001220703125
  },
  ImageBackground_I1378_15119_1364_704: {
    width: 13.381818771362305,
    height: 17.98181915283203,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.690673828125
  },
  ImageBackground_I1378_15119_1364_706: {
    width: 6.869472980499268,
    height: 0.836363673210144,
    top: 14.21820068359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.18212890625
  },
  ImageBackground_I1378_15119_1364_708: {
    width: 6.8698930740356445,
    height: 0.836363673210144,
    top: 14.21820068359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.71240234375
  },
  View_I1378_15119_1364_710: {
    width: 9.199999809265137,
    height: 9.19999885559082,
    top: 2.0888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.775634765625
  },
  ImageBackground_I1378_15119_1364_711: {
    width: 9.199999809265137,
    height: 9.19999885559082,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_15119_1364_713: {
    width: 3.3703079223632812,
    height: 2.6731395721435547,
    top: 0.12567138671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.189453125
  },
  ImageBackground_I1378_15119_1364_715: {
    width: 2.113673686981201,
    height: 3.861211061477661,
    top: 3.85614013671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.0693359375
  },
  ImageBackground_I1378_15119_1364_717: {
    width: 4.0476789474487305,
    height: 1.6777453422546387,
    top: 7.20001220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.576416015625
  },
  ImageBackground_I1378_15119_1364_719: {
    width: 2.1152143478393555,
    height: 3.860804319381714,
    top: 3.8565673828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.0166015625
  },
  ImageBackground_I1378_15119_1364_721: {
    width: 3.369419813156128,
    height: 2.6729161739349365,
    top: 0.12591552734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.64306640625
  },
  ImageBackground_I1378_15119_1364_723: {
    width: 3.915950298309326,
    height: 3.763637065887451,
    top: 2.5091552734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.64501953125
  },
  View_1378_15120: {
    width: 16,
    minWidth: 16,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 181,
    top: 469
  },
  Text_1378_15120: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15121: {
    width: 16,
    minWidth: 16,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 181,
    top: 411
  },
  Text_1378_15121: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15122: {
    width: 16,
    minWidth: 16,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 181,
    top: 352
  },
  Text_1378_15122: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15123: {
    width: 16,
    minWidth: 16,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 181,
    top: 291
  },
  Text_1378_15123: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15124: {
    width: 16,
    minWidth: 16,
    minHeight: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 183,
    top: 231
  },
  Text_1378_15124: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_2: { height: 943 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
