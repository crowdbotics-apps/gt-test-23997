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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4bd/405d/7617f4fb137ece198c88ba5c58c5923f"
        }}
        style={styles.ImageBackground_1378_15126}
      />
      <View style={styles.View_1378_15127} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03bf/e57b/a8c08c7002e2c5da11025ff2c1187582"
        }}
        style={styles.ImageBackground_1378_15128}
      />
      <View style={styles.View_1378_15129}>
        <View style={styles.View_1378_15130} />
        <View style={styles.View_1378_15131} />
        <View style={styles.View_1378_15132} />
        <View style={styles.View_1378_15133}>
          <Text style={styles.Text_1378_15133}>DRAW № 496</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6e3/7aaa/f759b3a5c17d3aafe002a15cbdf9f698"
          }}
          style={styles.ImageBackground_1378_15134}
        />
      </View>
      <View style={styles.View_1378_15136}>
        <View style={styles.View_1378_15137}>
          <Text style={styles.Text_1378_15137}>Time remaining</Text>
        </View>
        <View style={styles.View_1378_15138}>
          <View style={styles.View_1378_15139} />
          <View style={styles.View_1378_15140}>
            <Text style={styles.Text_1378_15140}>days</Text>
          </View>
          <View style={styles.View_1378_15141}>
            <Text style={styles.Text_1378_15141}>0</Text>
          </View>
          <View style={styles.View_1378_15142} />
          <View style={styles.View_1378_15143} />
          <View style={styles.View_1378_15144} />
          <View style={styles.View_1378_15145}>
            <Text style={styles.Text_1378_15145}>Min</Text>
          </View>
          <View style={styles.View_1378_15146}>
            <Text style={styles.Text_1378_15146}>sec</Text>
          </View>
          <View style={styles.View_1378_15147}>
            <Text style={styles.Text_1378_15147}>Hrs</Text>
          </View>
          <View style={styles.View_1378_15148}>
            <Text style={styles.Text_1378_15148}>00</Text>
          </View>
          <View style={styles.View_1378_15149}>
            <Text style={styles.Text_1378_15149}>03</Text>
          </View>
          <View style={styles.View_1378_15150}>
            <Text style={styles.Text_1378_15150}>27</Text>
          </View>
        </View>
        <View style={styles.View_1378_15151} />
        <View style={styles.View_1378_15152} />
        <View style={styles.View_1378_15153}>
          <Text style={styles.Text_1378_15153}>MY TOTAL : 314 P </Text>
        </View>
        <View style={styles.View_1378_15154}>
          <View style={styles.View_1378_15155}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d08/97cd/e75a25cba17439531628b82eb32353b9"
              }}
              style={styles.ImageBackground_1378_15156}
            />
          </View>
        </View>
        <View style={styles.View_1378_15181}>
          <Text style={styles.Text_1378_15181}>4 856 081 P</Text>
        </View>
      </View>
      <View style={styles.View_1378_15182}>
        <View style={styles.View_1378_15183}>
          <Text style={styles.Text_1378_15183}>1</Text>
        </View>
        <View style={styles.View_1378_15184}>
          <Text style={styles.Text_1378_15184}>Time</Text>
        </View>
        <View style={styles.View_1378_15185}>
          <Text style={styles.Text_1378_15185}>X</Text>
        </View>
        <View style={styles.View_1378_15186}>
          <Text style={styles.Text_1378_15186}>2</Text>
        </View>
      </View>
      <View style={styles.View_1378_15187}>
        <View style={styles.View_1378_15188}>
          <Text style={styles.Text_1378_15188}>1</Text>
        </View>
        <View style={styles.View_1378_15189}>
          <Text style={styles.Text_1378_15189}>Time</Text>
        </View>
        <View style={styles.View_1378_15190}>
          <Text style={styles.Text_1378_15190}>X</Text>
        </View>
        <View style={styles.View_1378_15191}>
          <Text style={styles.Text_1378_15191}>2</Text>
        </View>
      </View>
      <View style={styles.View_1378_15192}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f5/0799/75515fc267c5dd5240567ce91543e186"
          }}
          style={styles.ImageBackground_1378_15193}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f338/c020/8ab0c4ec185b57ed8a5c7c5a114a7629"
          }}
          style={styles.ImageBackground_1378_15194}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ca/7679/cdad8eaf2ac0be66c96e749548a3e9aa"
          }}
          style={styles.ImageBackground_1378_15201}
        />
      </View>
      <View style={styles.View_1378_15208}>
        <Text style={styles.Text_1378_15208}>4’</Text>
      </View>
      <View style={styles.View_1378_15209}>
        <View style={styles.View_1378_15210}>
          <View style={styles.View_1378_15211}>
            <View style={styles.View_1378_15212}>
              <Text style={styles.Text_1378_15212}>Manchester</Text>
            </View>
            <View style={styles.View_1378_15213}>
              <Text style={styles.Text_1378_15213}>Liverpool</Text>
            </View>
            <View style={styles.View_1378_15214}>
              <Text style={styles.Text_1378_15214}>1 - 0</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
              }}
              style={styles.ImageBackground_1378_15215}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
              }}
              style={styles.ImageBackground_1378_15216}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1378_15217}>
        <View style={styles.View_1378_15218}>
          <View style={styles.View_1378_15219}>
            <View style={styles.View_1378_15220}>
              <Text style={styles.Text_1378_15220}>Manchester</Text>
            </View>
            <View style={styles.View_1378_15221}>
              <Text style={styles.Text_1378_15221}>Liverpool</Text>
            </View>
            <View style={styles.View_1378_15222}>
              <Text style={styles.Text_1378_15222}>1 - 0</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
              }}
              style={styles.ImageBackground_1378_15223}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
              }}
              style={styles.ImageBackground_1378_15224}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1378_15225}>
        <View style={styles.View_1378_15226}>
          <Text style={styles.Text_1378_15226}>12% </Text>
        </View>
        <View style={styles.View_1378_15227}>
          <Text style={styles.Text_1378_15227}>68%</Text>
        </View>
        <View style={styles.View_1378_15228}>
          <Text style={styles.Text_1378_15228}>20%</Text>
        </View>
        <View style={styles.View_1378_15229}>
          <Text style={styles.Text_1378_15229}>2,44</Text>
        </View>
        <View style={styles.View_1378_15230}>
          <Text style={styles.Text_1378_15230}>1,32</Text>
        </View>
        <View style={styles.View_1378_15231}>
          <Text style={styles.Text_1378_15231}>3,55</Text>
        </View>
        <View style={styles.View_1378_15232} />
        <View style={styles.View_1378_15233} />
        <View style={styles.View_1378_15234} />
      </View>
      <View style={styles.View_1378_15235}>
        <Text style={styles.Text_1378_15235}>12’</Text>
      </View>
      <View style={styles.View_1378_15236}>
        <View style={styles.View_1378_15237} />
        <View style={styles.View_1378_15238}>
          <Text style={styles.Text_1378_15238}>12% </Text>
        </View>
        <View style={styles.View_1378_15239}>
          <Text style={styles.Text_1378_15239}>68%</Text>
        </View>
        <View style={styles.View_1378_15240}>
          <Text style={styles.Text_1378_15240}>20%</Text>
        </View>
        <View style={styles.View_1378_15241}>
          <Text style={styles.Text_1378_15241}>2,44</Text>
        </View>
        <View style={styles.View_1378_15242}>
          <Text style={styles.Text_1378_15242}>1,32</Text>
        </View>
        <View style={styles.View_1378_15243}>
          <Text style={styles.Text_1378_15243}>3,55</Text>
        </View>
        <View style={styles.View_1378_15244} />
        <View style={styles.View_1378_15245} />
      </View>
      <View style={styles.View_1378_15246}>
        <Text style={styles.Text_1378_15246}>view details</Text>
      </View>
      <View style={styles.View_1378_15247} />
      <View style={styles.View_1378_15248}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f5/0799/75515fc267c5dd5240567ce91543e186"
          }}
          style={styles.ImageBackground_1378_15249}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f338/c020/8ab0c4ec185b57ed8a5c7c5a114a7629"
          }}
          style={styles.ImageBackground_1378_15250}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ca/7679/cdad8eaf2ac0be66c96e749548a3e9aa"
          }}
          style={styles.ImageBackground_1378_15257}
        />
      </View>
      <View style={styles.View_1378_15264} />
      <View style={styles.View_1378_15265}>
        <Text style={styles.Text_1378_15265}>view details</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
        }}
        style={styles.ImageBackground_1378_15266}
      />
      <View style={styles.View_1378_15267}>
        <View style={styles.View_1378_15268}>
          <Text style={styles.Text_1378_15268}>Manchester</Text>
        </View>
        <View style={styles.View_1378_15269}>
          <Text style={styles.Text_1378_15269}>Liverpool</Text>
        </View>
        <View style={styles.View_1378_15270}>
          <Text style={styles.Text_1378_15270}>1 - 0</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
          }}
          style={styles.ImageBackground_1378_15271}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
          }}
          style={styles.ImageBackground_1378_15272}
        />
        <View style={styles.View_1378_15273}>
          <Text style={styles.Text_1378_15273}>1</Text>
        </View>
        <View style={styles.View_1378_15274}>
          <Text style={styles.Text_1378_15274}>Time</Text>
        </View>
        <View style={styles.View_1378_15275}>
          <Text style={styles.Text_1378_15275}>X</Text>
        </View>
        <View style={styles.View_1378_15276}>
          <Text style={styles.Text_1378_15276}>2</Text>
        </View>
        <View style={styles.View_1378_15277}>
          <Text style={styles.Text_1378_15277}>17’</Text>
        </View>
        <View style={styles.View_1378_15278}>
          <Text style={styles.Text_1378_15278}>12% </Text>
        </View>
        <View style={styles.View_1378_15279}>
          <Text style={styles.Text_1378_15279}>68%</Text>
        </View>
        <View style={styles.View_1378_15280}>
          <Text style={styles.Text_1378_15280}>20%</Text>
        </View>
        <View style={styles.View_1378_15281}>
          <Text style={styles.Text_1378_15281}>2,44</Text>
        </View>
        <View style={styles.View_1378_15282}>
          <Text style={styles.Text_1378_15282}>1,32</Text>
        </View>
        <View style={styles.View_1378_15283}>
          <Text style={styles.Text_1378_15283}>3,55</Text>
        </View>
        <View style={styles.View_1378_15284} />
        <View style={styles.View_1378_15285} />
        <View style={styles.View_1378_15286} />
        <View style={styles.View_1378_15287} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f5/0799/75515fc267c5dd5240567ce91543e186"
          }}
          style={styles.ImageBackground_1378_15288}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f338/c020/8ab0c4ec185b57ed8a5c7c5a114a7629"
          }}
          style={styles.ImageBackground_1378_15289}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ca/7679/cdad8eaf2ac0be66c96e749548a3e9aa"
          }}
          style={styles.ImageBackground_1378_15296}
        />
        <View style={styles.View_1378_15303}>
          <Text style={styles.Text_1378_15303}>view details</Text>
        </View>
        <View style={styles.View_1378_15304} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
          }}
          style={styles.ImageBackground_1378_15305}
        />
      </View>
      <View style={styles.View_1378_15306}>
        <View style={styles.View_1378_15307}>
          <Text style={styles.Text_1378_15307}>Manchester</Text>
        </View>
        <View style={styles.View_1378_15308}>
          <Text style={styles.Text_1378_15308}>Liverpool</Text>
        </View>
        <View style={styles.View_1378_15309}>
          <Text style={styles.Text_1378_15309}>1 - 0</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
          }}
          style={styles.ImageBackground_1378_15310}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
          }}
          style={styles.ImageBackground_1378_15311}
        />
        <View style={styles.View_1378_15312}>
          <Text style={styles.Text_1378_15312}>1</Text>
        </View>
        <View style={styles.View_1378_15313}>
          <Text style={styles.Text_1378_15313}>Time</Text>
        </View>
        <View style={styles.View_1378_15314}>
          <Text style={styles.Text_1378_15314}>X</Text>
        </View>
        <View style={styles.View_1378_15315}>
          <Text style={styles.Text_1378_15315}>2</Text>
        </View>
        <View style={styles.View_1378_15316}>
          <Text style={styles.Text_1378_15316}>37’</Text>
        </View>
        <View style={styles.View_1378_15317}>
          <Text style={styles.Text_1378_15317}>12% </Text>
        </View>
        <View style={styles.View_1378_15318}>
          <Text style={styles.Text_1378_15318}>68%</Text>
        </View>
        <View style={styles.View_1378_15319}>
          <Text style={styles.Text_1378_15319}>20%</Text>
        </View>
        <View style={styles.View_1378_15320}>
          <Text style={styles.Text_1378_15320}>2,44</Text>
        </View>
        <View style={styles.View_1378_15321}>
          <Text style={styles.Text_1378_15321}>1,32</Text>
        </View>
        <View style={styles.View_1378_15322}>
          <Text style={styles.Text_1378_15322}>3,55</Text>
        </View>
        <View style={styles.View_1378_15323} />
        <View style={styles.View_1378_15324} />
        <View style={styles.View_1378_15325} />
        <View style={styles.View_1378_15326}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f5/0799/75515fc267c5dd5240567ce91543e186"
            }}
            style={styles.ImageBackground_1378_15327}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f338/c020/8ab0c4ec185b57ed8a5c7c5a114a7629"
            }}
            style={styles.ImageBackground_1378_15328}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ca/7679/cdad8eaf2ac0be66c96e749548a3e9aa"
            }}
            style={styles.ImageBackground_1378_15335}
          />
        </View>
        <View style={styles.View_1378_15342}>
          <Text style={styles.Text_1378_15342}>view details</Text>
        </View>
        <View style={styles.View_1378_15343} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
          }}
          style={styles.ImageBackground_1378_15344}
        />
      </View>
      <View style={styles.View_1378_15345}>
        <View style={styles.View_1378_15346}>
          <Text style={styles.Text_1378_15346}>Manchester</Text>
        </View>
        <View style={styles.View_1378_15347}>
          <Text style={styles.Text_1378_15347}>Liverpool</Text>
        </View>
        <View style={styles.View_1378_15348}>
          <Text style={styles.Text_1378_15348}>1 - 0</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
          }}
          style={styles.ImageBackground_1378_15349}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
          }}
          style={styles.ImageBackground_1378_15350}
        />
        <View style={styles.View_1378_15351}>
          <Text style={styles.Text_1378_15351}>1</Text>
        </View>
        <View style={styles.View_1378_15352}>
          <Text style={styles.Text_1378_15352}>Time</Text>
        </View>
        <View style={styles.View_1378_15353}>
          <Text style={styles.Text_1378_15353}>X</Text>
        </View>
        <View style={styles.View_1378_15354}>
          <Text style={styles.Text_1378_15354}>2</Text>
        </View>
        <View style={styles.View_1378_15355}>
          <Text style={styles.Text_1378_15355}>soon</Text>
        </View>
        <View style={styles.View_1378_15356}>
          <Text style={styles.Text_1378_15356}>soon</Text>
        </View>
        <View style={styles.View_1378_15357}>
          <Text style={styles.Text_1378_15357}>soon</Text>
        </View>
        <View style={styles.View_1378_15358}>
          <Text style={styles.Text_1378_15358}>soon</Text>
        </View>
        <View style={styles.View_1378_15359}>
          <Text style={styles.Text_1378_15359}>12% </Text>
        </View>
        <View style={styles.View_1378_15360}>
          <Text style={styles.Text_1378_15360}>68%</Text>
        </View>
        <View style={styles.View_1378_15361}>
          <Text style={styles.Text_1378_15361}>20%</Text>
        </View>
        <View style={styles.View_1378_15362}>
          <Text style={styles.Text_1378_15362}>2,44</Text>
        </View>
        <View style={styles.View_1378_15363}>
          <Text style={styles.Text_1378_15363}>1,32</Text>
        </View>
        <View style={styles.View_1378_15364}>
          <Text style={styles.Text_1378_15364}>3,55</Text>
        </View>
        <View style={styles.View_1378_15365} />
        <View style={styles.View_1378_15366} />
        <View style={styles.View_1378_15367} />
        <View style={styles.View_1378_15368}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f5/0799/75515fc267c5dd5240567ce91543e186"
            }}
            style={styles.ImageBackground_1378_15369}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f338/c020/8ab0c4ec185b57ed8a5c7c5a114a7629"
            }}
            style={styles.ImageBackground_1378_15370}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ca/7679/cdad8eaf2ac0be66c96e749548a3e9aa"
            }}
            style={styles.ImageBackground_1378_15377}
          />
        </View>
        <View style={styles.View_1378_15384}>
          <Text style={styles.Text_1378_15384}>view details</Text>
        </View>
        <View style={styles.View_1378_15385} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
          }}
          style={styles.ImageBackground_1378_15386}
        />
      </View>
      <View style={styles.View_1378_15387}>
        <View style={styles.View_1378_15388}>
          <Text style={styles.Text_1378_15388}>Manchester</Text>
        </View>
        <View style={styles.View_1378_15389}>
          <Text style={styles.Text_1378_15389}>Liverpool</Text>
        </View>
        <View style={styles.View_1378_15390}>
          <Text style={styles.Text_1378_15390}>25 Apr</Text>
        </View>
        <View style={styles.View_1378_15391}>
          <Text style={styles.Text_1378_15391}>25 Apr</Text>
        </View>
        <View style={styles.View_1378_15392}>
          <Text style={styles.Text_1378_15392}>25 Apr</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
          }}
          style={styles.ImageBackground_1378_15393}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
          }}
          style={styles.ImageBackground_1378_15394}
        />
        <View style={styles.View_1378_15395}>
          <Text style={styles.Text_1378_15395}>1</Text>
        </View>
        <View style={styles.View_1378_15396}>
          <Text style={styles.Text_1378_15396}>Time</Text>
        </View>
        <View style={styles.View_1378_15397}>
          <Text style={styles.Text_1378_15397}>X</Text>
        </View>
        <View style={styles.View_1378_15398}>
          <Text style={styles.Text_1378_15398}>2</Text>
        </View>
        <View style={styles.View_1378_15399}>
          <Text style={styles.Text_1378_15399}>12% </Text>
        </View>
        <View style={styles.View_1378_15400}>
          <Text style={styles.Text_1378_15400}>68%</Text>
        </View>
        <View style={styles.View_1378_15401}>
          <Text style={styles.Text_1378_15401}>20%</Text>
        </View>
        <View style={styles.View_1378_15402}>
          <Text style={styles.Text_1378_15402}>2,44</Text>
        </View>
        <View style={styles.View_1378_15403}>
          <Text style={styles.Text_1378_15403}>1,32</Text>
        </View>
        <View style={styles.View_1378_15404}>
          <Text style={styles.Text_1378_15404}>3,55</Text>
        </View>
        <View style={styles.View_1378_15405} />
        <View style={styles.View_1378_15406} />
        <View style={styles.View_1378_15407} />
        <View style={styles.View_1378_15408}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f5/0799/75515fc267c5dd5240567ce91543e186"
            }}
            style={styles.ImageBackground_1378_15409}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f338/c020/8ab0c4ec185b57ed8a5c7c5a114a7629"
            }}
            style={styles.ImageBackground_1378_15410}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ca/7679/cdad8eaf2ac0be66c96e749548a3e9aa"
            }}
            style={styles.ImageBackground_1378_15417}
          />
        </View>
        <View style={styles.View_1378_15424}>
          <Text style={styles.Text_1378_15424}>view details</Text>
        </View>
        <View style={styles.View_1378_15425} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
          }}
          style={styles.ImageBackground_1378_15426}
        />
      </View>
      <View style={styles.View_1378_15427}>
        <View style={styles.View_1378_15428}>
          <Text style={styles.Text_1378_15428}>Manchester</Text>
        </View>
        <View style={styles.View_1378_15429}>
          <Text style={styles.Text_1378_15429}>Liverpool</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
          }}
          style={styles.ImageBackground_1378_15430}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
          }}
          style={styles.ImageBackground_1378_15431}
        />
        <View style={styles.View_1378_15432}>
          <Text style={styles.Text_1378_15432}>1</Text>
        </View>
        <View style={styles.View_1378_15433}>
          <Text style={styles.Text_1378_15433}>Time</Text>
        </View>
        <View style={styles.View_1378_15434}>
          <Text style={styles.Text_1378_15434}>X</Text>
        </View>
        <View style={styles.View_1378_15435}>
          <Text style={styles.Text_1378_15435}>2</Text>
        </View>
        <View style={styles.View_1378_15436}>
          <Text style={styles.Text_1378_15436}>12% </Text>
        </View>
        <View style={styles.View_1378_15437}>
          <Text style={styles.Text_1378_15437}>68%</Text>
        </View>
        <View style={styles.View_1378_15438}>
          <Text style={styles.Text_1378_15438}>20%</Text>
        </View>
        <View style={styles.View_1378_15439}>
          <Text style={styles.Text_1378_15439}>2,44</Text>
        </View>
        <View style={styles.View_1378_15440}>
          <Text style={styles.Text_1378_15440}>1,32</Text>
        </View>
        <View style={styles.View_1378_15441}>
          <Text style={styles.Text_1378_15441}>3,55</Text>
        </View>
        <View style={styles.View_1378_15442} />
        <View style={styles.View_1378_15443} />
        <View style={styles.View_1378_15444} />
        <View style={styles.View_1378_15445}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f5/0799/75515fc267c5dd5240567ce91543e186"
            }}
            style={styles.ImageBackground_1378_15446}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f338/c020/8ab0c4ec185b57ed8a5c7c5a114a7629"
            }}
            style={styles.ImageBackground_1378_15447}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ca/7679/cdad8eaf2ac0be66c96e749548a3e9aa"
            }}
            style={styles.ImageBackground_1378_15454}
          />
        </View>
        <View style={styles.View_1378_15461}>
          <Text style={styles.Text_1378_15461}>view details</Text>
        </View>
        <View style={styles.View_1378_15462} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
          }}
          style={styles.ImageBackground_1378_15463}
        />
      </View>
      <View style={styles.View_1378_15464}>
        <View style={styles.View_1378_15465}>
          <Text style={styles.Text_1378_15465}>Manchester</Text>
        </View>
        <View style={styles.View_1378_15466}>
          <Text style={styles.Text_1378_15466}>Liverpool</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
          }}
          style={styles.ImageBackground_1378_15467}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
          }}
          style={styles.ImageBackground_1378_15468}
        />
        <View style={styles.View_1378_15469}>
          <Text style={styles.Text_1378_15469}>1</Text>
        </View>
        <View style={styles.View_1378_15470}>
          <Text style={styles.Text_1378_15470}>Time</Text>
        </View>
        <View style={styles.View_1378_15471}>
          <Text style={styles.Text_1378_15471}>X</Text>
        </View>
        <View style={styles.View_1378_15472}>
          <Text style={styles.Text_1378_15472}>2</Text>
        </View>
        <View style={styles.View_1378_15473}>
          <Text style={styles.Text_1378_15473}>12% </Text>
        </View>
        <View style={styles.View_1378_15474}>
          <Text style={styles.Text_1378_15474}>68%</Text>
        </View>
        <View style={styles.View_1378_15475}>
          <Text style={styles.Text_1378_15475}>20%</Text>
        </View>
        <View style={styles.View_1378_15476}>
          <Text style={styles.Text_1378_15476}>2,44</Text>
        </View>
        <View style={styles.View_1378_15477}>
          <Text style={styles.Text_1378_15477}>1,32</Text>
        </View>
        <View style={styles.View_1378_15478}>
          <Text style={styles.Text_1378_15478}>3,55</Text>
        </View>
        <View style={styles.View_1378_15479} />
        <View style={styles.View_1378_15480} />
        <View style={styles.View_1378_15481} />
        <View style={styles.View_1378_15482}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f5/0799/75515fc267c5dd5240567ce91543e186"
            }}
            style={styles.ImageBackground_1378_15483}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f338/c020/8ab0c4ec185b57ed8a5c7c5a114a7629"
            }}
            style={styles.ImageBackground_1378_15484}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ca/7679/cdad8eaf2ac0be66c96e749548a3e9aa"
            }}
            style={styles.ImageBackground_1378_15491}
          />
        </View>
        <View style={styles.View_1378_15498}>
          <Text style={styles.Text_1378_15498}>view details</Text>
        </View>
        <View style={styles.View_1378_15499} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
          }}
          style={styles.ImageBackground_1378_15500}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
          }}
          style={styles.ImageBackground_1378_15501}
        />
      </View>
      <View style={styles.View_1378_15502}>
        <View style={styles.View_1378_15503} />
        <View style={styles.View_1378_15504}>
          <Text style={styles.Text_1378_15504}>BET NOW</Text>
        </View>
      </View>
      <View style={styles.View_1378_15505}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e8f/c737/d841c7c2c1ac385ba64f458998ba834f"
          }}
          style={styles.ImageBackground_1378_15506}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/782e/0f29/f5935e1bdfc7a4c3f0da0d3801681dd2"
          }}
          style={styles.ImageBackground_1378_15507}
        />
      </View>
      <View style={styles.View_1378_15508}>
        <View style={styles.View_I1378_15508_200_649} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c8a/dfd6/6b80ee4cb3d2d137fd351959b6ee251f"
          }}
          style={styles.ImageBackground_I1378_15508_200_655}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33fd/65ea/45cdc6e9be66a7f02bcafb88bff12b8f"
          }}
          style={styles.ImageBackground_I1378_15508_200_656}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e41/4dad/b9186fcb12118e6a2063346bab84e453"
          }}
          style={styles.ImageBackground_I1378_15508_282_5146}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/926f/9b31/37788a3e53bc1cad08fb891a371b0d71"
          }}
          style={styles.ImageBackground_I1378_15508_282_5147}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11a0/81a1/a78833a04721af7363b42f726483b0ca"
          }}
          style={styles.ImageBackground_I1378_15508_282_5148}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c447/5112/eadcf61a2474657e24f19c27d7d7466d"
          }}
          style={styles.ImageBackground_I1378_15508_616_1412}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c871/c57e/0da8b9953f2daed2c01193b27ce0ab7c"
        }}
        style={styles.ImageBackground_1378_15509}
      />
      <View style={styles.View_1378_15510}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7443/dda1/7b51859be688164435b2af746223e72d"
          }}
          style={styles.ImageBackground_I1378_15510_282_6132}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7892/c1ea/de3f766dda80bddeaaca16dbe3647481"
          }}
          style={styles.ImageBackground_I1378_15510_988_6517}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b3f/e3fb/7db2d0b297f2e1a6c142be9c13729ca7"
          }}
          style={styles.ImageBackground_I1378_15510_988_6519}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20e6/a9d7/a808783b1a426c2d8d35eec3c80c4546"
          }}
          style={styles.ImageBackground_I1378_15510_988_6521}
        />
        <View style={styles.View_I1378_15510_988_6522}>
          <Text style={styles.Text_I1378_15510_988_6522}>Home</Text>
        </View>
        <View style={styles.View_I1378_15510_1364_3889}>
          <Text style={styles.Text_I1378_15510_1364_3889}>Results</Text>
        </View>
        <View style={styles.View_I1378_15510_988_6523}>
          <Text style={styles.Text_I1378_15510_988_6523}>History</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f87/946c/3ab8c968fc445931fe1ba6ec9e930ae9"
          }}
          style={styles.ImageBackground_I1378_15510_988_6524}
        />
        <View style={styles.View_I1378_15510_1364_676}>
          <View style={styles.View_I1378_15510_1364_677}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0a8/ceb9/7d14d4cf1aac5331b12b0e3ead2bf7dd"
              }}
              style={styles.ImageBackground_I1378_15510_1364_678}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09c2/2175/507dc86c48ca17d66c7029c154ce5b2c"
              }}
              style={styles.ImageBackground_I1378_15510_1364_682}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e8e/21b4/9cbc39cb1c85fdbc22f2e7a141a74a80"
              }}
              style={styles.ImageBackground_I1378_15510_1364_684}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aad3/6c55/940837b04537e41909ae352fbbb04d32"
              }}
              style={styles.ImageBackground_I1378_15510_1364_686}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0eff/a0f3/74ccd44d9775c70cd68d2c38af17e92d"
              }}
              style={styles.ImageBackground_I1378_15510_1364_688}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cdb/13ff/2a5c1b5900421cb08c2b0ce2c7e119a7"
              }}
              style={styles.ImageBackground_I1378_15510_1364_690}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82e5/2ac0/2354ae66fa38914669617f8d242c1963"
              }}
              style={styles.ImageBackground_I1378_15510_1364_692}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_15510_1364_694}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82e5/2ac0/2354ae66fa38914669617f8d242c1963"
              }}
              style={styles.ImageBackground_I1378_15510_1364_696}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_15510_1364_698}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_15510_1364_700}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cdc/6045/dbc06947304927748b610ea000f55d73"
              }}
              style={styles.ImageBackground_I1378_15510_1364_702}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/720b/17b3/16ce33446d37af6c6285cc39c2270cc9"
              }}
              style={styles.ImageBackground_I1378_15510_1364_704}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cded/aea6/3ba0e67f257c63a7bdf60f41772bf286"
              }}
              style={styles.ImageBackground_I1378_15510_1364_706}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cded/aea6/3ba0e67f257c63a7bdf60f41772bf286"
              }}
              style={styles.ImageBackground_I1378_15510_1364_708}
            />
          </View>
          <View style={styles.View_I1378_15510_1364_710}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6c9/c4bc/f5025ebf9fa21253256e8e6609c12f95"
              }}
              style={styles.ImageBackground_I1378_15510_1364_711}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/871f/5cef/8cedd9500a12408982f2e93fea88bb62"
              }}
              style={styles.ImageBackground_I1378_15510_1364_713}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d07/0616/e9f729e081d510fa1e2c9979c6098443"
              }}
              style={styles.ImageBackground_I1378_15510_1364_715}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2475/5ccc/94641c3e81d91e9b3057e334dede2698"
              }}
              style={styles.ImageBackground_I1378_15510_1364_717}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8cd/ebf9/8269319277d39e1d4e040e0ed92180ed"
              }}
              style={styles.ImageBackground_I1378_15510_1364_719}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9eba/d401/4a377409d3c95f7296fa162b363831e2"
              }}
              style={styles.ImageBackground_I1378_15510_1364_721}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f112/243b/2b142e314a54e1abb992ac34be8c08d4"
              }}
              style={styles.ImageBackground_I1378_15510_1364_723}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1378_15511} />
      <View style={styles.View_1378_15512} />
      <View style={styles.View_1378_15513} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64db/b109/4df2ac774234ab2cfbf9bfc606892874"
        }}
        style={styles.ImageBackground_1378_15514}
      />
      <View style={styles.View_1378_15515}>
        <Text style={styles.Text_1378_15515}>Confirmation</Text>
      </View>
      <View style={styles.View_1378_15516}>
        <Text style={styles.Text_1378_15516}>
          Are you sure that you want to bet 100 POINTS on draw №456?
        </Text>
      </View>
      <View style={styles.View_1378_15517}>
        <View style={styles.View_1378_15518}>
          <View style={styles.View_1378_15519} />
          <View style={styles.View_1378_15520}>
            <Text style={styles.Text_1378_15520}>OK</Text>
          </View>
        </View>
        <View style={styles.View_1378_15521}>
          <View style={styles.View_1378_15522} />
          <View style={styles.View_1378_15523}>
            <Text style={styles.Text_1378_15523}>cANCEL</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_1378_15126: {
    width: 375,
    minWidth: 375,
    height: 1613,
    minHeight: 1613,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15127: {
    width: 341,
    minWidth: 341,
    height: 1349,
    minHeight: 1349,
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
  ImageBackground_1378_15128: {
    width: 341,
    minWidth: 341,
    height: 176,
    minHeight: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 105
  },
  View_1378_15129: {
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
  View_1378_15130: {
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
  View_1378_15131: {
    width: 21,
    height: 15.400001525878906,
    top: 8.800048828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 294,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1378_15132: {
    width: 21,
    height: 15.400001525878906,
    top: 8.800048828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1378_15133: {
    width: 73,
    minWidth: 73,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 134,
    top: 12
  },
  Text_1378_15133: {
    color: "rgba(0, 42, 173, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15134: {
    width: 21,
    height: 21,
    top: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 307
  },
  View_1378_15136: {
    width: 230.7681427001953,
    minWidth: 230.7681427001953,
    height: 146,
    minHeight: 146,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 95,
    top: 120
  },
  View_1378_15137: {
    width: 93,
    minWidth: 93,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 46,
    top: 0
  },
  Text_1378_15137: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_15138: {
    width: 179.40432739257812,
    minWidth: 179.40432739257812,
    height: 47.43901824951172,
    minHeight: 47.43901824951172,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 15
  },
  View_1378_15139: {
    width: 43.4393196105957,
    minWidth: 43.4393196105957,
    height: 47.438663482666016,
    minHeight: 47.438663482666016,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.0003662109375
  },
  View_1378_15140: {
    width: 13.031797409057617,
    minWidth: 13.031797409057617,
    minHeight: 6.9001688957214355,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.638427734375,
    top: 36.225830078125
  },
  Text_1378_15140: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5.037647724151611,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_15141: {
    width: 16.072547912597656,
    minWidth: 16.072547912597656,
    minHeight: 32.34454345703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.3349609375,
    top: 7.743896484375
  },
  Text_1378_15141: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21.600675582885742,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15142: {
    width: 43.87371063232422,
    minWidth: 43.87371063232422,
    height: 47.00740051269531,
    minHeight: 47.00740051269531,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 135.5306396484375,
    top: 0
  },
  View_1378_15143: {
    width: 43.87371063232422,
    minWidth: 43.87371063232422,
    height: 47.00740051269531,
    minHeight: 47.00740051269531,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 90.35400390625,
    top: 0
  },
  View_1378_15144: {
    width: 43.87371063232422,
    minWidth: 43.87371063232422,
    height: 47.00740051269531,
    minHeight: 47.00740051269531,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45.1767578125,
    top: 0
  },
  View_1378_15145: {
    width: 10.425436973571777,
    minWidth: 10.425436973571777,
    minHeight: 6.9001688957214355,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 107.294921875,
    top: 36.225830078125
  },
  Text_1378_15145: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5.037647724151611,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_15146: {
    width: 9.991044044494629,
    minWidth: 9.991044044494629,
    minHeight: 6.9001688957214355,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 153.3411865234375,
    top: 36.225830078125
  },
  Text_1378_15146: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5.037647724151611,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_15147: {
    width: 8.687864303588867,
    minWidth: 8.687864303588867,
    minHeight: 6.9001688957214355,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 63.421630859375,
    top: 36.225830078125
  },
  Text_1378_15147: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5.037647724151611,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_15148: {
    width: 31.710704803466797,
    minWidth: 31.710704803466797,
    minHeight: 32.34454345703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 51.25830078125,
    top: 7.743896484375
  },
  Text_1378_15148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21.600675582885742,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15149: {
    width: 31.710704803466797,
    minWidth: 31.710704803466797,
    minHeight: 32.34454345703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 96.43505859375,
    top: 7.743896484375
  },
  Text_1378_15149: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21.600675582885742,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15150: {
    width: 31.710704803466797,
    minWidth: 31.710704803466797,
    minHeight: 32.34454345703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 142.4814453125,
    top: 7.743896484375
  },
  Text_1378_15150: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21.600675582885742,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15151: {
    width: 180,
    height: 38,
    top: 67,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  View_1378_15152: {
    width: 180,
    height: 36,
    top: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1378_15153: {
    width: 201.3661346435547,
    minWidth: 201.3661346435547,
    minHeight: 16.264684677124023,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28.5595703125,
    top: 118.746826171875
  },
  Text_1378_15153: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13.264684677124023,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_15154: {
    width: 31,
    height: 31,
    top: 78,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1378_15155: {
    width: 31.00103187561035,
    height: 23.862579345703125,
    top: -2.43115234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -0.00048828125
  },
  ImageBackground_1378_15156: {
    width: 31.00103187561035,
    height: 23.862579345703125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1378_15181: {
    width: 171.0069122314453,
    minWidth: 171.0069122314453,
    minHeight: 34.08576202392578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59.76123046875,
    top: 75.026611328125
  },
  Text_1378_15181: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.125587463378906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_15182: {
    width: 178,
    minWidth: 178,
    height: 9.072376251220703,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 347
  },
  View_1378_15183: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 0
  },
  Text_1378_15183: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15184: {
    width: 36,
    minWidth: 36,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_1378_15184: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15185: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 0
  },
  Text_1378_15185: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15186: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 173,
    top: 0
  },
  Text_1378_15186: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15187: {
    width: 178,
    minWidth: 178,
    height: 9.072376251220703,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 479
  },
  View_1378_15188: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 0
  },
  Text_1378_15188: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15189: {
    width: 36,
    minWidth: 36,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_1378_15189: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15190: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 0
  },
  Text_1378_15190: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15191: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 173,
    top: 0
  },
  Text_1378_15191: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15192: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 290,
    top: 341,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1378_15193: {
    width: 11.24303913116455,
    height: 11.243053436279297,
    top: 4.3782958984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.378173828125
  },
  ImageBackground_1378_15194: {
    width: 12.13059139251709,
    height: 12.947348594665527,
    top: 4.5498046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.1580810546875
  },
  ImageBackground_1378_15201: {
    width: 14.126415252685547,
    height: 13.6608247756958,
    top: 4.37841796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.0892333984375
  },
  View_1378_15208: {
    width: 16,
    minWidth: 16,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 379
  },
  Text_1378_15208: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15209: {
    width: 293.6960754394531,
    minWidth: 293.6960754394531,
    height: 48.24538803100586,
    minHeight: 48.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43,
    top: 300
  },
  View_1378_15210: {
    width: 293.6960754394531,
    minWidth: 293.6960754394531,
    height: 48.24538803100586,
    minHeight: 48.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15211: {
    width: 293.6960754394531,
    minWidth: 293.6960754394531,
    height: 48.24538803100586,
    minHeight: 48.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15212: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 10
  },
  Text_1378_15212: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15213: {
    width: 71.6960678100586,
    minWidth: 71.6960678100586,
    minHeight: 15.208256721496582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 222,
    top: 10
  },
  Text_1378_15213: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15214: {
    width: 83.32030487060547,
    minWidth: 83.32030487060547,
    minHeight: 38.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 10
  },
  Text_1378_15214: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15215: {
    width: 17,
    minWidth: 17,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 199,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_1378_15216: {
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
  View_1378_15217: {
    width: 293.6960754394531,
    minWidth: 293.6960754394531,
    height: 48.24538803100586,
    minHeight: 48.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43,
    top: 432
  },
  View_1378_15218: {
    width: 293.6960754394531,
    minWidth: 293.6960754394531,
    height: 48.24538803100586,
    minHeight: 48.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15219: {
    width: 293.6960754394531,
    minWidth: 293.6960754394531,
    height: 48.24538803100586,
    minHeight: 48.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15220: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 10
  },
  Text_1378_15220: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15221: {
    width: 71.6960678100586,
    minWidth: 71.6960678100586,
    minHeight: 15.208256721496582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 222,
    top: 10
  },
  Text_1378_15221: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15222: {
    width: 83.32030487060547,
    minWidth: 83.32030487060547,
    minHeight: 38.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 10
  },
  Text_1378_15222: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15223: {
    width: 17,
    minWidth: 17,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 199,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_1378_15224: {
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
  View_1378_15225: {
    width: 159.40032958984375,
    minWidth: 159.40032958984375,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 84,
    top: 367
  },
  View_1378_15226: {
    width: 60.14640426635742,
    minWidth: 60.14640426635742,
    minHeight: 14.839045524597168,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.9453125,
    top: 18.160888671875
  },
  Text_1378_15226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15227: {
    width: 42.40032196044922,
    minWidth: 42.40032196044922,
    minHeight: 10.460813522338867,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 117,
    top: 18
  },
  Text_1378_15227: {
    color: "rgba(51, 198, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15228: {
    width: 71.88163757324219,
    minWidth: 71.88163757324219,
    minHeight: 12.941250801086426,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 63,
    top: 18
  },
  Text_1378_15228: {
    color: "rgba(255, 184, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15229: {
    width: 20,
    minWidth: 20,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 6
  },
  Text_1378_15229: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15230: {
    width: 26,
    minWidth: 26,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60,
    top: 6
  },
  Text_1378_15230: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15231: {
    width: 22,
    minWidth: 22,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 113,
    top: 6
  },
  Text_1378_15231: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15232: {
    width: 36,
    minWidth: 36,
    height: 32.82352828979492,
    minHeight: 32.82352828979492,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52,
    top: 0,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_15233: {
    width: 36,
    minWidth: 36,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 105,
    top: 0,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_15234: {
    width: 36.24590301513672,
    minWidth: 36.24590301513672,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.44591301679611206,
    borderTopLeftRadius: 4.45913028717041,
    borderTopRightRadius: 4.45913028717041,
    borderBottomLeftRadius: 4.45913028717041,
    borderBottomRightRadius: 4.45913028717041
  },
  View_1378_15235: {
    width: 16,
    minWidth: 16,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 511
  },
  Text_1378_15235: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15236: {
    width: 159.40032958984375,
    minWidth: 159.40032958984375,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 84,
    top: 499
  },
  View_1378_15237: {
    width: 36.24590301513672,
    minWidth: 36.24590301513672,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(90, 131, 255, 1)",
    borderTopLeftRadius: 4.45913028717041,
    borderTopRightRadius: 4.45913028717041,
    borderBottomLeftRadius: 4.45913028717041,
    borderBottomRightRadius: 4.45913028717041
  },
  View_1378_15238: {
    width: 60.14640426635742,
    minWidth: 60.14640426635742,
    minHeight: 14.839045524597168,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 18
  },
  Text_1378_15238: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15239: {
    width: 42.40032196044922,
    minWidth: 42.40032196044922,
    minHeight: 10.460813522338867,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 117,
    top: 18
  },
  Text_1378_15239: {
    color: "rgba(51, 198, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15240: {
    width: 71.88163757324219,
    minWidth: 71.88163757324219,
    minHeight: 12.941250801086426,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 63,
    top: 18
  },
  Text_1378_15240: {
    color: "rgba(255, 184, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15241: {
    width: 20,
    minWidth: 20,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 6
  },
  Text_1378_15241: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15242: {
    width: 26,
    minWidth: 26,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60,
    top: 6
  },
  Text_1378_15242: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15243: {
    width: 22,
    minWidth: 22,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 113,
    top: 6
  },
  Text_1378_15243: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15244: {
    width: 36,
    minWidth: 36,
    height: 32.82352828979492,
    minHeight: 32.82352828979492,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52,
    top: 0,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_15245: {
    width: 36,
    minWidth: 36,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 105,
    top: 0,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_15246: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 269,
    top: 378
  },
  Text_1378_15246: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_15247: {
    width: 93,
    minWidth: 93,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 253,
    top: 369,
    borderColor: "rgba(90, 131, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1378_15248: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 290,
    top: 473,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1378_15249: {
    width: 11.24303913116455,
    height: 11.243053436279297,
    top: 4.3782958984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.378173828125
  },
  ImageBackground_1378_15250: {
    width: 12.13059139251709,
    height: 12.947348594665527,
    top: 4.5498046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.1580810546875
  },
  ImageBackground_1378_15257: {
    width: 14.126415252685547,
    height: 13.6608247756958,
    top: 4.37841796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.0892333984375
  },
  View_1378_15264: {
    width: 93,
    minWidth: 93,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 253,
    top: 501,
    backgroundColor: "rgba(90, 131, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1378_15265: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 269,
    top: 510
  },
  Text_1378_15265: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_1378_15266: {
    width: 341,
    minWidth: 341,
    height: 0.000029811166314175352,
    minHeight: 0.000029811166314175352,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 422
  },
  View_1378_15267: {
    width: 341,
    minWidth: 341,
    height: 164,
    minHeight: 164,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 499
  },
  View_1378_15268: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 75
  },
  Text_1378_15268: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15269: {
    width: 71.6960678100586,
    minWidth: 71.6960678100586,
    minHeight: 15.208256721496582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 248,
    top: 75
  },
  Text_1378_15269: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15270: {
    width: 83.32030487060547,
    minWidth: 83.32030487060547,
    minHeight: 38.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 156,
    top: 75
  },
  Text_1378_15270: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15271: {
    width: 17,
    minWidth: 17,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 225,
    top: 65,
    resizeMode: "cover"
  },
  ImageBackground_1378_15272: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28,
    top: 67,
    resizeMode: "cover"
  },
  View_1378_15273: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82,
    top: 111
  },
  Text_1378_15273: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15274: {
    width: 36,
    minWidth: 36,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 111
  },
  Text_1378_15274: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15275: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 134,
    top: 111
  },
  Text_1378_15275: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15276: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 111
  },
  Text_1378_15276: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15277: {
    width: 16,
    minWidth: 16,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 143
  },
  Text_1378_15277: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15278: {
    width: 60.14640426635742,
    minWidth: 60.14640426635742,
    minHeight: 14.839045524597168,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77.9453125,
    top: 149.160888671875
  },
  Text_1378_15278: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15279: {
    width: 42.40032196044922,
    minWidth: 42.40032196044922,
    minHeight: 10.460813522338867,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 184,
    top: 149
  },
  Text_1378_15279: {
    color: "rgba(51, 198, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15280: {
    width: 71.88163757324219,
    minWidth: 71.88163757324219,
    minHeight: 12.941250801086426,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 149
  },
  Text_1378_15280: {
    color: "rgba(255, 184, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15281: {
    width: 20,
    minWidth: 20,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 137
  },
  Text_1378_15281: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15282: {
    width: 26,
    minWidth: 26,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127,
    top: 137
  },
  Text_1378_15282: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15283: {
    width: 22,
    minWidth: 22,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180,
    top: 137
  },
  Text_1378_15283: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15284: {
    width: 36,
    minWidth: 36,
    height: 32.82352828979492,
    minHeight: 32.82352828979492,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 131,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_15285: {
    width: 36,
    minWidth: 36,
    height: 32.82352828979492,
    minHeight: 32.82352828979492,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 0,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_15286: {
    width: 36,
    minWidth: 36,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 172,
    top: 131,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_15287: {
    width: 36.24590301513672,
    minWidth: 36.24590301513672,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 131,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.44591301679611206,
    borderTopLeftRadius: 4.45913028717041,
    borderTopRightRadius: 4.45913028717041,
    borderBottomLeftRadius: 4.45913028717041,
    borderBottomRightRadius: 4.45913028717041
  },
  ImageBackground_1378_15288: {
    width: 11.24303913116455,
    height: 11.243053436279297,
    top: 109.378173828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 277.3779296875
  },
  ImageBackground_1378_15289: {
    width: 12.13059139251709,
    height: 12.947348594665527,
    top: 109.5498046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 278.158203125
  },
  ImageBackground_1378_15296: {
    width: 14.126415252685547,
    height: 13.6608247756958,
    top: 109.37841796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 277.08935546875
  },
  View_1378_15303: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 252,
    top: 142
  },
  Text_1378_15303: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_15304: {
    width: 93,
    minWidth: 93,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 236,
    top: 133,
    borderColor: "rgba(90, 131, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_1378_15305: {
    width: 341,
    minWidth: 341,
    height: 0.00002981116995215416,
    minHeight: 0.00002981116995215416,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 55
  },
  View_1378_15306: {
    width: 341,
    minWidth: 341,
    height: 109,
    minHeight: 109,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 685
  },
  View_1378_15307: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 20
  },
  Text_1378_15307: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15308: {
    width: 71.6960678100586,
    minWidth: 71.6960678100586,
    minHeight: 15.208256721496582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 248,
    top: 20
  },
  Text_1378_15308: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15309: {
    width: 83.32030487060547,
    minWidth: 83.32030487060547,
    minHeight: 38.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 156,
    top: 20
  },
  Text_1378_15309: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15310: {
    width: 17,
    minWidth: 17,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 225,
    top: 10,
    resizeMode: "cover"
  },
  ImageBackground_1378_15311: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28,
    top: 12,
    resizeMode: "cover"
  },
  View_1378_15312: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82,
    top: 56
  },
  Text_1378_15312: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15313: {
    width: 36,
    minWidth: 36,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 56
  },
  Text_1378_15313: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15314: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 134,
    top: 56
  },
  Text_1378_15314: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15315: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 56
  },
  Text_1378_15315: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15316: {
    width: 16,
    minWidth: 16,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 88
  },
  Text_1378_15316: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15317: {
    width: 60.14640426635742,
    minWidth: 60.14640426635742,
    minHeight: 14.839045524597168,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77.9453125,
    top: 94.160888671875
  },
  Text_1378_15317: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15318: {
    width: 42.40032196044922,
    minWidth: 42.40032196044922,
    minHeight: 10.460813522338867,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 184,
    top: 94
  },
  Text_1378_15318: {
    color: "rgba(51, 198, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15319: {
    width: 71.88163757324219,
    minWidth: 71.88163757324219,
    minHeight: 12.941250801086426,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 94
  },
  Text_1378_15319: {
    color: "rgba(255, 184, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15320: {
    width: 20,
    minWidth: 20,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 82
  },
  Text_1378_15320: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15321: {
    width: 26,
    minWidth: 26,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127,
    top: 82
  },
  Text_1378_15321: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15322: {
    width: 22,
    minWidth: 22,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180,
    top: 82
  },
  Text_1378_15322: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15323: {
    width: 36,
    minWidth: 36,
    height: 32.82352828979492,
    minHeight: 32.82352828979492,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_15324: {
    width: 36,
    minWidth: 36,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 172,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_15325: {
    width: 36.24590301513672,
    minWidth: 36.24590301513672,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.44591301679611206,
    borderTopLeftRadius: 4.45913028717041,
    borderTopRightRadius: 4.45913028717041,
    borderBottomLeftRadius: 4.45913028717041,
    borderBottomRightRadius: 4.45913028717041
  },
  View_1378_15326: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 273,
    top: 50,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1378_15327: {
    width: 11.24303913116455,
    height: 11.243053436279297,
    top: 4.378173828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.378173828125
  },
  ImageBackground_1378_15328: {
    width: 12.13059139251709,
    height: 12.947348594665527,
    top: 4.5498046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.1580810546875
  },
  ImageBackground_1378_15335: {
    width: 14.126415252685547,
    height: 13.6608247756958,
    top: 4.37841796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.0892333984375
  },
  View_1378_15342: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 252,
    top: 87
  },
  Text_1378_15342: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_15343: {
    width: 93,
    minWidth: 93,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 236,
    top: 78,
    borderColor: "rgba(90, 131, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_1378_15344: {
    width: 341,
    minWidth: 341,
    height: 0.00002981116995215416,
    minHeight: 0.00002981116995215416,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15345: {
    width: 341,
    minWidth: 341,
    height: 492,
    minHeight: 492,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 818
  },
  View_1378_15346: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 20
  },
  Text_1378_15346: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15347: {
    width: 71.6960678100586,
    minWidth: 71.6960678100586,
    minHeight: 15.208256721496582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 248,
    top: 20
  },
  Text_1378_15347: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15348: {
    width: 83.32030487060547,
    minWidth: 83.32030487060547,
    minHeight: 38.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 156,
    top: 20
  },
  Text_1378_15348: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15349: {
    width: 17,
    minWidth: 17,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 225,
    top: 10,
    resizeMode: "cover"
  },
  ImageBackground_1378_15350: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28,
    top: 12,
    resizeMode: "cover"
  },
  View_1378_15351: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82,
    top: 56
  },
  Text_1378_15351: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15352: {
    width: 36,
    minWidth: 36,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 56
  },
  Text_1378_15352: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15353: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 134,
    top: 56
  },
  Text_1378_15353: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15354: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 56
  },
  Text_1378_15354: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15355: {
    width: 31,
    minWidth: 31,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 88
  },
  Text_1378_15355: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_15356: {
    width: 31,
    minWidth: 31,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 222
  },
  Text_1378_15356: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_15357: {
    width: 31,
    minWidth: 31,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 354
  },
  Text_1378_15357: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_15358: {
    width: 31,
    minWidth: 31,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 485
  },
  Text_1378_15358: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_15359: {
    width: 60.14640426635742,
    minWidth: 60.14640426635742,
    minHeight: 14.839045524597168,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77.9453125,
    top: 94.160888671875
  },
  Text_1378_15359: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15360: {
    width: 42.40032196044922,
    minWidth: 42.40032196044922,
    minHeight: 10.460813522338867,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 184,
    top: 94
  },
  Text_1378_15360: {
    color: "rgba(51, 198, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15361: {
    width: 71.88163757324219,
    minWidth: 71.88163757324219,
    minHeight: 12.941250801086426,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 94
  },
  Text_1378_15361: {
    color: "rgba(255, 184, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15362: {
    width: 20,
    minWidth: 20,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 82
  },
  Text_1378_15362: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15363: {
    width: 26,
    minWidth: 26,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127,
    top: 82
  },
  Text_1378_15363: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15364: {
    width: 22,
    minWidth: 22,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180,
    top: 82
  },
  Text_1378_15364: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15365: {
    width: 36,
    minWidth: 36,
    height: 32.82352828979492,
    minHeight: 32.82352828979492,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_15366: {
    width: 36,
    minWidth: 36,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 172,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_15367: {
    width: 36.24590301513672,
    minWidth: 36.24590301513672,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.44591301679611206,
    borderTopLeftRadius: 4.45913028717041,
    borderTopRightRadius: 4.45913028717041,
    borderBottomLeftRadius: 4.45913028717041,
    borderBottomRightRadius: 4.45913028717041
  },
  View_1378_15368: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 273,
    top: 50,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1378_15369: {
    width: 11.24303913116455,
    height: 11.243053436279297,
    top: 4.378173828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.378173828125
  },
  ImageBackground_1378_15370: {
    width: 12.13059139251709,
    height: 12.947348594665527,
    top: 4.5498046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.1580810546875
  },
  ImageBackground_1378_15377: {
    width: 14.126415252685547,
    height: 13.6608247756958,
    top: 4.37841796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.0892333984375
  },
  View_1378_15384: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 252,
    top: 87
  },
  Text_1378_15384: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_15385: {
    width: 93,
    minWidth: 93,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 236,
    top: 78,
    borderColor: "rgba(90, 131, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_1378_15386: {
    width: 341,
    minWidth: 341,
    height: 0.00002981116995215416,
    minHeight: 0.00002981116995215416,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15387: {
    width: 341,
    minWidth: 341,
    height: 324.2453918457031,
    minHeight: 324.2453918457031,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 951
  },
  View_1378_15388: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 20
  },
  Text_1378_15388: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15389: {
    width: 71.6960678100586,
    minWidth: 71.6960678100586,
    minHeight: 15.208256721496582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 248,
    top: 20
  },
  Text_1378_15389: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15390: {
    width: 83.32030487060547,
    minWidth: 83.32030487060547,
    minHeight: 38.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 156,
    top: 20
  },
  Text_1378_15390: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15391: {
    width: 83.32030487060547,
    minWidth: 83.32030487060547,
    minHeight: 38.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 156,
    top: 153
  },
  Text_1378_15391: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15392: {
    width: 83.32030487060547,
    minWidth: 83.32030487060547,
    minHeight: 38.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 156,
    top: 286
  },
  Text_1378_15392: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15393: {
    width: 17,
    minWidth: 17,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 225,
    top: 10,
    resizeMode: "cover"
  },
  ImageBackground_1378_15394: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28,
    top: 12,
    resizeMode: "cover"
  },
  View_1378_15395: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82,
    top: 56
  },
  Text_1378_15395: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15396: {
    width: 36,
    minWidth: 36,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 56
  },
  Text_1378_15396: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15397: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 134,
    top: 56
  },
  Text_1378_15397: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15398: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 56
  },
  Text_1378_15398: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15399: {
    width: 60.14640426635742,
    minWidth: 60.14640426635742,
    minHeight: 14.839045524597168,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77.9453125,
    top: 94.160888671875
  },
  Text_1378_15399: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15400: {
    width: 42.40032196044922,
    minWidth: 42.40032196044922,
    minHeight: 10.460813522338867,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 184,
    top: 94
  },
  Text_1378_15400: {
    color: "rgba(51, 198, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15401: {
    width: 71.88163757324219,
    minWidth: 71.88163757324219,
    minHeight: 12.941250801086426,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 94
  },
  Text_1378_15401: {
    color: "rgba(255, 184, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15402: {
    width: 20,
    minWidth: 20,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 82
  },
  Text_1378_15402: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15403: {
    width: 26,
    minWidth: 26,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127,
    top: 82
  },
  Text_1378_15403: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15404: {
    width: 22,
    minWidth: 22,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180,
    top: 82
  },
  Text_1378_15404: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15405: {
    width: 36,
    minWidth: 36,
    height: 32.82352828979492,
    minHeight: 32.82352828979492,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_15406: {
    width: 36,
    minWidth: 36,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 172,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_15407: {
    width: 36.24590301513672,
    minWidth: 36.24590301513672,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.44591301679611206,
    borderTopLeftRadius: 4.45913028717041,
    borderTopRightRadius: 4.45913028717041,
    borderBottomLeftRadius: 4.45913028717041,
    borderBottomRightRadius: 4.45913028717041
  },
  View_1378_15408: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 273,
    top: 50,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1378_15409: {
    width: 11.24303913116455,
    height: 11.243053436279297,
    top: 4.378173828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.378173828125
  },
  ImageBackground_1378_15410: {
    width: 12.13059139251709,
    height: 12.947348594665527,
    top: 4.5498046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.1580810546875
  },
  ImageBackground_1378_15417: {
    width: 14.126415252685547,
    height: 13.6608247756958,
    top: 4.37841796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.0892333984375
  },
  View_1378_15424: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 252,
    top: 87
  },
  Text_1378_15424: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_15425: {
    width: 93,
    minWidth: 93,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 236,
    top: 78,
    borderColor: "rgba(90, 131, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_1378_15426: {
    width: 341,
    minWidth: 341,
    height: 0.00002981116995215416,
    minHeight: 0.00002981116995215416,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15427: {
    width: 341,
    minWidth: 341,
    height: 109,
    minHeight: 109,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 1084
  },
  View_1378_15428: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 20
  },
  Text_1378_15428: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15429: {
    width: 71.6960678100586,
    minWidth: 71.6960678100586,
    minHeight: 15.208256721496582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 248,
    top: 20
  },
  Text_1378_15429: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15430: {
    width: 17,
    minWidth: 17,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 225,
    top: 10,
    resizeMode: "cover"
  },
  ImageBackground_1378_15431: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28,
    top: 12,
    resizeMode: "cover"
  },
  View_1378_15432: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82,
    top: 56
  },
  Text_1378_15432: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15433: {
    width: 36,
    minWidth: 36,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 56
  },
  Text_1378_15433: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15434: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 134,
    top: 56
  },
  Text_1378_15434: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15435: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 56
  },
  Text_1378_15435: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15436: {
    width: 60.14640426635742,
    minWidth: 60.14640426635742,
    minHeight: 14.839045524597168,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77.9453125,
    top: 94.160888671875
  },
  Text_1378_15436: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15437: {
    width: 42.40032196044922,
    minWidth: 42.40032196044922,
    minHeight: 10.460813522338867,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 184,
    top: 94
  },
  Text_1378_15437: {
    color: "rgba(51, 198, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15438: {
    width: 71.88163757324219,
    minWidth: 71.88163757324219,
    minHeight: 12.941250801086426,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 94
  },
  Text_1378_15438: {
    color: "rgba(255, 184, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15439: {
    width: 20,
    minWidth: 20,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 82
  },
  Text_1378_15439: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15440: {
    width: 26,
    minWidth: 26,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127,
    top: 82
  },
  Text_1378_15440: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15441: {
    width: 22,
    minWidth: 22,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180,
    top: 82
  },
  Text_1378_15441: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15442: {
    width: 36,
    minWidth: 36,
    height: 32.82352828979492,
    minHeight: 32.82352828979492,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_15443: {
    width: 36,
    minWidth: 36,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 172,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_15444: {
    width: 36.24590301513672,
    minWidth: 36.24590301513672,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.44591301679611206,
    borderTopLeftRadius: 4.45913028717041,
    borderTopRightRadius: 4.45913028717041,
    borderBottomLeftRadius: 4.45913028717041,
    borderBottomRightRadius: 4.45913028717041
  },
  View_1378_15445: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 273,
    top: 50,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1378_15446: {
    width: 11.24303913116455,
    height: 11.243053436279297,
    top: 4.378173828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.378173828125
  },
  ImageBackground_1378_15447: {
    width: 12.13059139251709,
    height: 12.947348594665527,
    top: 4.5498046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.1580810546875
  },
  ImageBackground_1378_15454: {
    width: 14.126415252685547,
    height: 13.6608247756958,
    top: 4.37841796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.0892333984375
  },
  View_1378_15461: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 252,
    top: 87
  },
  Text_1378_15461: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_15462: {
    width: 93,
    minWidth: 93,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 236,
    top: 78,
    borderColor: "rgba(90, 131, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_1378_15463: {
    width: 341,
    minWidth: 341,
    height: 0.00002981116995215416,
    minHeight: 0.00002981116995215416,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15464: {
    width: 341,
    minWidth: 341,
    height: 136.00003051757812,
    minHeight: 136.00003051757812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 1217
  },
  View_1378_15465: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 20
  },
  Text_1378_15465: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15466: {
    width: 71.6960678100586,
    minWidth: 71.6960678100586,
    minHeight: 15.208256721496582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 249,
    top: 20
  },
  Text_1378_15466: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15467: {
    width: 17,
    minWidth: 17,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 226,
    top: 10,
    resizeMode: "cover"
  },
  ImageBackground_1378_15468: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28,
    top: 12,
    resizeMode: "cover"
  },
  View_1378_15469: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82,
    top: 56
  },
  Text_1378_15469: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15470: {
    width: 36,
    minWidth: 36,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 56
  },
  Text_1378_15470: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15471: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 134,
    top: 56
  },
  Text_1378_15471: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15472: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 56
  },
  Text_1378_15472: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15473: {
    width: 60.14640426635742,
    minWidth: 60.14640426635742,
    minHeight: 14.839045524597168,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77.9453125,
    top: 94.160888671875
  },
  Text_1378_15473: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15474: {
    width: 42.40032196044922,
    minWidth: 42.40032196044922,
    minHeight: 10.460813522338867,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 184,
    top: 94
  },
  Text_1378_15474: {
    color: "rgba(51, 198, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15475: {
    width: 71.88163757324219,
    minWidth: 71.88163757324219,
    minHeight: 12.941250801086426,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 94
  },
  Text_1378_15475: {
    color: "rgba(255, 184, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15476: {
    width: 20,
    minWidth: 20,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 82
  },
  Text_1378_15476: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15477: {
    width: 26,
    minWidth: 26,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127,
    top: 82
  },
  Text_1378_15477: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15478: {
    width: 22,
    minWidth: 22,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180,
    top: 82
  },
  Text_1378_15478: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15479: {
    width: 36,
    minWidth: 36,
    height: 32.82352828979492,
    minHeight: 32.82352828979492,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_15480: {
    width: 36,
    minWidth: 36,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 172,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_15481: {
    width: 36.24590301513672,
    minWidth: 36.24590301513672,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.44591301679611206,
    borderTopLeftRadius: 4.45913028717041,
    borderTopRightRadius: 4.45913028717041,
    borderBottomLeftRadius: 4.45913028717041,
    borderBottomRightRadius: 4.45913028717041
  },
  View_1378_15482: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 273,
    top: 50,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1378_15483: {
    width: 11.24303913116455,
    height: 11.243053436279297,
    top: 4.378173828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.378173828125
  },
  ImageBackground_1378_15484: {
    width: 12.13059139251709,
    height: 12.947348594665527,
    top: 4.5498046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.1580810546875
  },
  ImageBackground_1378_15491: {
    width: 14.126415252685547,
    height: 13.6608247756958,
    top: 4.37841796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.0892333984375
  },
  View_1378_15498: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 252,
    top: 87
  },
  Text_1378_15498: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_15499: {
    width: 93,
    minWidth: 93,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 236,
    top: 78,
    borderColor: "rgba(90, 131, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_1378_15500: {
    width: 341,
    minWidth: 341,
    height: 0.00002981116995215416,
    minHeight: 0.00002981116995215416,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_1378_15501: {
    width: 341,
    minWidth: 341,
    height: 0.00002981116995215416,
    minHeight: 0.00002981116995215416,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 136
  },
  View_1378_15502: {
    width: 134,
    minWidth: 134,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 1368,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1378_15503: {
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
  View_1378_15504: {
    width: 61,
    top: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36
  },
  Text_1378_15504: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_15505: {
    width: 38,
    minWidth: 38,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 307.28857421875,
    top: 1369.5
  },
  ImageBackground_1378_15506: {
    width: 19,
    height: 18,
    top: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10
  },
  ImageBackground_1378_15507: {
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
  View_1378_15508: {
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
  View_I1378_15508_200_649: {
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
  ImageBackground_I1378_15508_200_655: {
    flexGrow: 1,
    width: 68.78099822998047,
    height: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 10
  },
  ImageBackground_I1378_15508_200_656: {
    flexGrow: 1,
    width: 10,
    height: 6.110935688018799,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 344,
    top: 14
  },
  ImageBackground_I1378_15508_282_5146: {
    flexGrow: 1,
    width: 33,
    height: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 232,
    top: 6
  },
  ImageBackground_I1378_15508_282_5147: {
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
  ImageBackground_I1378_15508_282_5148: {
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
  ImageBackground_I1378_15508_616_1412: {
    flexGrow: 1,
    width: 115.28089904785156,
    height: 24.60260009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 7.88623046875,
    resizeMode: "cover"
  },
  ImageBackground_1378_15509: {
    width: 21,
    height: 14.766021728515625,
    top: 83,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30
  },
  View_1378_15510: {
    width: 375,
    minWidth: 375,
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1452,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1378_15510_282_6132: {
    flexGrow: 1,
    width: 375,
    height: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I1378_15510_988_6517: {
    flexGrow: 1,
    width: 49.65380859375,
    height: 6.837890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 110,
    top: 36
  },
  ImageBackground_I1378_15510_988_6519: {
    flexGrow: 1,
    width: 30.00023651123047,
    height: 19.159626007080078,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 10
  },
  ImageBackground_I1378_15510_988_6521: {
    flexGrow: 1,
    width: 20,
    height: 18.33333396911621,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 11
  },
  View_I1378_15510_988_6522: {
    flexGrow: 1,
    width: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 34
  },
  Text_I1378_15510_988_6522: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1378_15510_1364_3889: {
    flexGrow: 1,
    width: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 217,
    top: 34
  },
  Text_I1378_15510_1364_3889: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1378_15510_988_6523: {
    flexGrow: 1,
    width: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 311,
    top: 34
  },
  Text_I1378_15510_988_6523: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_I1378_15510_988_6524: {
    flexGrow: 1,
    width: 20,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 314.763671875,
    top: 11
  },
  View_I1378_15510_1364_676: {
    flexGrow: 1,
    width: 26.763774871826172,
    height: 21.32741928100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 219,
    top: 9
  },
  View_I1378_15510_1364_677: {
    width: 26.763774871826172,
    height: 21.32741928100586,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_15510_1364_678: {
    width: 26.763774871826172,
    height: 7.109440326690674,
    top: 14.2177734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_15510_1364_682: {
    width: 3.029043436050415,
    height: 5.436952590942383,
    top: 15.890380859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.700439453125
  },
  ImageBackground_I1378_15510_1364_684: {
    width: 1.4359464645385742,
    height: 2.9269301891326904,
    top: 16.3095703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.001220703125
  },
  ImageBackground_I1378_15510_1364_686: {
    width: 1.634328842163086,
    height: 2.510079860687256,
    top: 18.817138671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.4290771484375
  },
  ImageBackground_I1378_15510_1364_688: {
    width: 2.2307350635528564,
    height: 3.76133394241333,
    top: 14.218505859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.2364501953125
  },
  ImageBackground_I1378_15510_1364_690: {
    width: 1.4360383749008179,
    height: 2.926727533340454,
    top: 16.3095703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.3260498046875
  },
  ImageBackground_I1378_15510_1364_692: {
    width: 3.6636908054351807,
    height: 0.836363673210144,
    top: 15.890869140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.06640625
  },
  ImageBackground_I1378_15510_1364_694: {
    width: 4.219037055969238,
    height: 0.836363673210144,
    top: 18.818115234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.4290771484375
  },
  ImageBackground_I1378_15510_1364_696: {
    width: 3.901637077331543,
    height: 0.836363673210144,
    top: 17.1455078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.632080078125
  },
  ImageBackground_I1378_15510_1364_698: {
    width: 4.363308906555176,
    height: 0.836363673210144,
    top: 16.309326171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.5999755859375
  },
  ImageBackground_I1378_15510_1364_700: {
    width: 4.324418067932129,
    height: 0.836363673210144,
    top: 16.309326171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.8389892578125
  },
  ImageBackground_I1378_15510_1364_702: {
    width: 10.761491775512695,
    height: 0.836363673210144,
    top: 18.39990234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.001220703125
  },
  ImageBackground_I1378_15510_1364_704: {
    width: 13.381818771362305,
    height: 17.98181915283203,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.6907958984375
  },
  ImageBackground_I1378_15510_1364_706: {
    width: 6.869472980499268,
    height: 0.836363673210144,
    top: 14.21826171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.1820068359375
  },
  ImageBackground_I1378_15510_1364_708: {
    width: 6.8698930740356445,
    height: 0.836363673210144,
    top: 14.21826171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.7122802734375
  },
  View_I1378_15510_1364_710: {
    width: 9.199999809265137,
    height: 9.19999885559082,
    top: 2.0888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.7757568359375
  },
  ImageBackground_I1378_15510_1364_711: {
    width: 9.199999809265137,
    height: 9.19999885559082,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_15510_1364_713: {
    width: 3.3703079223632812,
    height: 2.6731395721435547,
    top: 0.125732421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.1895751953125
  },
  ImageBackground_I1378_15510_1364_715: {
    width: 2.113673686981201,
    height: 3.861211061477661,
    top: 3.856201171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.0693359375
  },
  ImageBackground_I1378_15510_1364_717: {
    width: 4.0476789474487305,
    height: 1.6777453422546387,
    top: 7.199951171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.5762939453125
  },
  ImageBackground_I1378_15510_1364_719: {
    width: 2.1152143478393555,
    height: 3.860804319381714,
    top: 3.856689453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.0166015625
  },
  ImageBackground_I1378_15510_1364_721: {
    width: 3.369419813156128,
    height: 2.6729161739349365,
    top: 0.1259765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.6429443359375
  },
  ImageBackground_I1378_15510_1364_723: {
    width: 3.915950298309326,
    height: 3.763637065887451,
    top: 2.509033203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.64501953125
  },
  View_1378_15511: {
    width: 373,
    minWidth: 373,
    height: 1411,
    minHeight: 1411,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 41,
    backgroundColor: "rgba(24, 24, 24, 1)",
    opacity: 0.7099999785423279
  },
  View_1378_15512: {
    width: 342,
    minWidth: 342,
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 132,
    backgroundColor: "rgba(253, 253, 253, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1378_15513: {
    width: 342,
    height: 57,
    top: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    backgroundColor: "rgba(0, 28, 113, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_1378_15514: {
    width: 21,
    height: 14.766021728515625,
    top: 123,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43
  },
  View_1378_15515: {
    width: 82,
    minWidth: 82,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 147,
    top: 124
  },
  Text_1378_15515: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15516: {
    width: 317,
    minWidth: 317,
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    top: 202
  },
  Text_1378_15516: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1378_15517: {
    width: 238,
    minWidth: 238,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 68,
    top: 287
  },
  View_1378_15518: {
    width: 115,
    minWidth: 115,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_15519: {
    width: 115,
    height: 45,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(90, 131, 255, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1378_15520: {
    width: 21.06382942199707,
    top: 15.319091796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 46.872314453125
  },
  Text_1378_15520: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_15521: {
    width: 115,
    minWidth: 115,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 123,
    top: 0
  },
  View_1378_15522: {
    width: 115,
    height: 45,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    borderColor: "rgba(90, 131, 255, 1)",
    borderWidth: 0.7452636361122131,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1378_15523: {
    width: 59.38524627685547,
    top: 15.36181640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35.819580078125
  },
  Text_1378_15523: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_2: { height: 1504 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
