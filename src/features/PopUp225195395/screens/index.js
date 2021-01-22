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
        style={styles.ImageBackground_1378_15525}
      />
      <View style={styles.View_1378_15526} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03bf/e57b/a8c08c7002e2c5da11025ff2c1187582"
        }}
        style={styles.ImageBackground_1378_15527}
      />
      <View style={styles.View_1378_15528}>
        <View style={styles.View_1378_15529} />
        <View style={styles.View_1378_15530} />
        <View style={styles.View_1378_15531} />
        <View style={styles.View_1378_15532}>
          <Text style={styles.Text_1378_15532}>DRAW № 496</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6e3/7aaa/f759b3a5c17d3aafe002a15cbdf9f698"
          }}
          style={styles.ImageBackground_1378_15533}
        />
      </View>
      <View style={styles.View_1378_15535}>
        <View style={styles.View_1378_15536}>
          <Text style={styles.Text_1378_15536}>Time remaining</Text>
        </View>
        <View style={styles.View_1378_15537}>
          <View style={styles.View_1378_15538} />
          <View style={styles.View_1378_15539}>
            <Text style={styles.Text_1378_15539}>days</Text>
          </View>
          <View style={styles.View_1378_15540}>
            <Text style={styles.Text_1378_15540}>0</Text>
          </View>
          <View style={styles.View_1378_15541} />
          <View style={styles.View_1378_15542} />
          <View style={styles.View_1378_15543} />
          <View style={styles.View_1378_15544}>
            <Text style={styles.Text_1378_15544}>Min</Text>
          </View>
          <View style={styles.View_1378_15545}>
            <Text style={styles.Text_1378_15545}>sec</Text>
          </View>
          <View style={styles.View_1378_15546}>
            <Text style={styles.Text_1378_15546}>Hrs</Text>
          </View>
          <View style={styles.View_1378_15547}>
            <Text style={styles.Text_1378_15547}>00</Text>
          </View>
          <View style={styles.View_1378_15548}>
            <Text style={styles.Text_1378_15548}>03</Text>
          </View>
          <View style={styles.View_1378_15549}>
            <Text style={styles.Text_1378_15549}>27</Text>
          </View>
        </View>
        <View style={styles.View_1378_15550} />
        <View style={styles.View_1378_15551} />
        <View style={styles.View_1378_15552}>
          <Text style={styles.Text_1378_15552}>MY TOTAL : 314 P </Text>
        </View>
        <View style={styles.View_1378_15553}>
          <View style={styles.View_1378_15554}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d08/97cd/e75a25cba17439531628b82eb32353b9"
              }}
              style={styles.ImageBackground_1378_15555}
            />
          </View>
        </View>
        <View style={styles.View_1378_15580}>
          <Text style={styles.Text_1378_15580}>4 856 081 P</Text>
        </View>
      </View>
      <View style={styles.View_1378_15581}>
        <View style={styles.View_1378_15582}>
          <Text style={styles.Text_1378_15582}>1</Text>
        </View>
        <View style={styles.View_1378_15583}>
          <Text style={styles.Text_1378_15583}>Time</Text>
        </View>
        <View style={styles.View_1378_15584}>
          <Text style={styles.Text_1378_15584}>X</Text>
        </View>
        <View style={styles.View_1378_15585}>
          <Text style={styles.Text_1378_15585}>2</Text>
        </View>
      </View>
      <View style={styles.View_1378_15586}>
        <View style={styles.View_1378_15587}>
          <Text style={styles.Text_1378_15587}>1</Text>
        </View>
        <View style={styles.View_1378_15588}>
          <Text style={styles.Text_1378_15588}>Time</Text>
        </View>
        <View style={styles.View_1378_15589}>
          <Text style={styles.Text_1378_15589}>X</Text>
        </View>
        <View style={styles.View_1378_15590}>
          <Text style={styles.Text_1378_15590}>2</Text>
        </View>
      </View>
      <View style={styles.View_1378_15591}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f5/0799/75515fc267c5dd5240567ce91543e186"
          }}
          style={styles.ImageBackground_1378_15592}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f338/c020/8ab0c4ec185b57ed8a5c7c5a114a7629"
          }}
          style={styles.ImageBackground_1378_15593}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ca/7679/cdad8eaf2ac0be66c96e749548a3e9aa"
          }}
          style={styles.ImageBackground_1378_15600}
        />
      </View>
      <View style={styles.View_1378_15607}>
        <Text style={styles.Text_1378_15607}>4’</Text>
      </View>
      <View style={styles.View_1378_15608}>
        <View style={styles.View_1378_15609}>
          <View style={styles.View_1378_15610}>
            <View style={styles.View_1378_15611}>
              <Text style={styles.Text_1378_15611}>Manchester</Text>
            </View>
            <View style={styles.View_1378_15612}>
              <Text style={styles.Text_1378_15612}>Liverpool</Text>
            </View>
            <View style={styles.View_1378_15613}>
              <Text style={styles.Text_1378_15613}>1 - 0</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
              }}
              style={styles.ImageBackground_1378_15614}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
              }}
              style={styles.ImageBackground_1378_15615}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1378_15616}>
        <View style={styles.View_1378_15617}>
          <View style={styles.View_1378_15618}>
            <View style={styles.View_1378_15619}>
              <Text style={styles.Text_1378_15619}>Manchester</Text>
            </View>
            <View style={styles.View_1378_15620}>
              <Text style={styles.Text_1378_15620}>Liverpool</Text>
            </View>
            <View style={styles.View_1378_15621}>
              <Text style={styles.Text_1378_15621}>1 - 0</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
              }}
              style={styles.ImageBackground_1378_15622}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
              }}
              style={styles.ImageBackground_1378_15623}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1378_15624}>
        <View style={styles.View_1378_15625}>
          <Text style={styles.Text_1378_15625}>12% </Text>
        </View>
        <View style={styles.View_1378_15626}>
          <Text style={styles.Text_1378_15626}>68%</Text>
        </View>
        <View style={styles.View_1378_15627}>
          <Text style={styles.Text_1378_15627}>2,44</Text>
        </View>
        <View style={styles.View_1378_15628}>
          <Text style={styles.Text_1378_15628}>1,32</Text>
        </View>
        <View style={styles.View_1378_15629}>
          <Text style={styles.Text_1378_15629}>3,55</Text>
        </View>
        <View style={styles.View_1378_15630} />
        <View style={styles.View_1378_15631} />
        <View style={styles.View_1378_15632} />
      </View>
      <View style={styles.View_1378_15633}>
        <Text style={styles.Text_1378_15633}>12’</Text>
      </View>
      <View style={styles.View_1378_15634}>
        <View style={styles.View_1378_15635} />
        <View style={styles.View_1378_15636}>
          <Text style={styles.Text_1378_15636}>12% </Text>
        </View>
        <View style={styles.View_1378_15637}>
          <Text style={styles.Text_1378_15637}>68%</Text>
        </View>
        <View style={styles.View_1378_15638}>
          <Text style={styles.Text_1378_15638}>20%</Text>
        </View>
        <View style={styles.View_1378_15639}>
          <Text style={styles.Text_1378_15639}>2,44</Text>
        </View>
        <View style={styles.View_1378_15640}>
          <Text style={styles.Text_1378_15640}>1,32</Text>
        </View>
        <View style={styles.View_1378_15641}>
          <Text style={styles.Text_1378_15641}>3,55</Text>
        </View>
        <View style={styles.View_1378_15642} />
        <View style={styles.View_1378_15643} />
      </View>
      <View style={styles.View_1378_15644}>
        <Text style={styles.Text_1378_15644}>view details</Text>
      </View>
      <View style={styles.View_1378_15645} />
      <View style={styles.View_1378_15646}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f5/0799/75515fc267c5dd5240567ce91543e186"
          }}
          style={styles.ImageBackground_1378_15647}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f338/c020/8ab0c4ec185b57ed8a5c7c5a114a7629"
          }}
          style={styles.ImageBackground_1378_15648}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ca/7679/cdad8eaf2ac0be66c96e749548a3e9aa"
          }}
          style={styles.ImageBackground_1378_15655}
        />
      </View>
      <View style={styles.View_1378_15662} />
      <View style={styles.View_1378_15663}>
        <Text style={styles.Text_1378_15663}>view details</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
        }}
        style={styles.ImageBackground_1378_15664}
      />
      <View style={styles.View_1378_15665}>
        <View style={styles.View_1378_15666}>
          <Text style={styles.Text_1378_15666}>Manchester</Text>
        </View>
        <View style={styles.View_1378_15667}>
          <Text style={styles.Text_1378_15667}>Liverpool</Text>
        </View>
        <View style={styles.View_1378_15668}>
          <Text style={styles.Text_1378_15668}>1 - 0</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
          }}
          style={styles.ImageBackground_1378_15669}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
          }}
          style={styles.ImageBackground_1378_15670}
        />
        <View style={styles.View_1378_15671}>
          <Text style={styles.Text_1378_15671}>1</Text>
        </View>
        <View style={styles.View_1378_15672}>
          <Text style={styles.Text_1378_15672}>Time</Text>
        </View>
        <View style={styles.View_1378_15673}>
          <Text style={styles.Text_1378_15673}>X</Text>
        </View>
        <View style={styles.View_1378_15674}>
          <Text style={styles.Text_1378_15674}>2</Text>
        </View>
        <View style={styles.View_1378_15675}>
          <Text style={styles.Text_1378_15675}>17’</Text>
        </View>
        <View style={styles.View_1378_15676}>
          <Text style={styles.Text_1378_15676}>12% </Text>
        </View>
        <View style={styles.View_1378_15677}>
          <Text style={styles.Text_1378_15677}>68%</Text>
        </View>
        <View style={styles.View_1378_15678}>
          <Text style={styles.Text_1378_15678}>20%</Text>
        </View>
        <View style={styles.View_1378_15679}>
          <Text style={styles.Text_1378_15679}>2,44</Text>
        </View>
        <View style={styles.View_1378_15680}>
          <Text style={styles.Text_1378_15680}>1,32</Text>
        </View>
        <View style={styles.View_1378_15681}>
          <Text style={styles.Text_1378_15681}>3,55</Text>
        </View>
        <View style={styles.View_1378_15682} />
        <View style={styles.View_1378_15683} />
        <View style={styles.View_1378_15684} />
        <View style={styles.View_1378_15685} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f5/0799/75515fc267c5dd5240567ce91543e186"
          }}
          style={styles.ImageBackground_1378_15686}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f338/c020/8ab0c4ec185b57ed8a5c7c5a114a7629"
          }}
          style={styles.ImageBackground_1378_15687}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ca/7679/cdad8eaf2ac0be66c96e749548a3e9aa"
          }}
          style={styles.ImageBackground_1378_15694}
        />
        <View style={styles.View_1378_15701}>
          <Text style={styles.Text_1378_15701}>view details</Text>
        </View>
        <View style={styles.View_1378_15702} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
          }}
          style={styles.ImageBackground_1378_15703}
        />
      </View>
      <View style={styles.View_1378_15704}>
        <View style={styles.View_1378_15705}>
          <Text style={styles.Text_1378_15705}>Manchester</Text>
        </View>
        <View style={styles.View_1378_15706}>
          <Text style={styles.Text_1378_15706}>Liverpool</Text>
        </View>
        <View style={styles.View_1378_15707}>
          <Text style={styles.Text_1378_15707}>1 - 0</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
          }}
          style={styles.ImageBackground_1378_15708}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
          }}
          style={styles.ImageBackground_1378_15709}
        />
        <View style={styles.View_1378_15710}>
          <Text style={styles.Text_1378_15710}>1</Text>
        </View>
        <View style={styles.View_1378_15711}>
          <Text style={styles.Text_1378_15711}>Time</Text>
        </View>
        <View style={styles.View_1378_15712}>
          <Text style={styles.Text_1378_15712}>X</Text>
        </View>
        <View style={styles.View_1378_15713}>
          <Text style={styles.Text_1378_15713}>2</Text>
        </View>
        <View style={styles.View_1378_15714}>
          <Text style={styles.Text_1378_15714}>37’</Text>
        </View>
        <View style={styles.View_1378_15715}>
          <Text style={styles.Text_1378_15715}>12% </Text>
        </View>
        <View style={styles.View_1378_15716}>
          <Text style={styles.Text_1378_15716}>68%</Text>
        </View>
        <View style={styles.View_1378_15717}>
          <Text style={styles.Text_1378_15717}>20%</Text>
        </View>
        <View style={styles.View_1378_15718}>
          <Text style={styles.Text_1378_15718}>2,44</Text>
        </View>
        <View style={styles.View_1378_15719}>
          <Text style={styles.Text_1378_15719}>1,32</Text>
        </View>
        <View style={styles.View_1378_15720}>
          <Text style={styles.Text_1378_15720}>3,55</Text>
        </View>
        <View style={styles.View_1378_15721} />
        <View style={styles.View_1378_15722} />
        <View style={styles.View_1378_15723} />
        <View style={styles.View_1378_15724}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f5/0799/75515fc267c5dd5240567ce91543e186"
            }}
            style={styles.ImageBackground_1378_15725}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f338/c020/8ab0c4ec185b57ed8a5c7c5a114a7629"
            }}
            style={styles.ImageBackground_1378_15726}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ca/7679/cdad8eaf2ac0be66c96e749548a3e9aa"
            }}
            style={styles.ImageBackground_1378_15733}
          />
        </View>
        <View style={styles.View_1378_15740}>
          <Text style={styles.Text_1378_15740}>view details</Text>
        </View>
        <View style={styles.View_1378_15741} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
          }}
          style={styles.ImageBackground_1378_15742}
        />
      </View>
      <View style={styles.View_1378_15743}>
        <View style={styles.View_1378_15744}>
          <Text style={styles.Text_1378_15744}>Manchester</Text>
        </View>
        <View style={styles.View_1378_15745}>
          <Text style={styles.Text_1378_15745}>Liverpool</Text>
        </View>
        <View style={styles.View_1378_15746}>
          <Text style={styles.Text_1378_15746}>1 - 0</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
          }}
          style={styles.ImageBackground_1378_15747}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
          }}
          style={styles.ImageBackground_1378_15748}
        />
        <View style={styles.View_1378_15749}>
          <Text style={styles.Text_1378_15749}>1</Text>
        </View>
        <View style={styles.View_1378_15750}>
          <Text style={styles.Text_1378_15750}>Time</Text>
        </View>
        <View style={styles.View_1378_15751}>
          <Text style={styles.Text_1378_15751}>X</Text>
        </View>
        <View style={styles.View_1378_15752}>
          <Text style={styles.Text_1378_15752}>2</Text>
        </View>
        <View style={styles.View_1378_15753}>
          <Text style={styles.Text_1378_15753}>soon</Text>
        </View>
        <View style={styles.View_1378_15754}>
          <Text style={styles.Text_1378_15754}>soon</Text>
        </View>
        <View style={styles.View_1378_15755}>
          <Text style={styles.Text_1378_15755}>soon</Text>
        </View>
        <View style={styles.View_1378_15756}>
          <Text style={styles.Text_1378_15756}>soon</Text>
        </View>
        <View style={styles.View_1378_15757}>
          <Text style={styles.Text_1378_15757}>12% </Text>
        </View>
        <View style={styles.View_1378_15758}>
          <Text style={styles.Text_1378_15758}>68%</Text>
        </View>
        <View style={styles.View_1378_15759}>
          <Text style={styles.Text_1378_15759}>20%</Text>
        </View>
        <View style={styles.View_1378_15760}>
          <Text style={styles.Text_1378_15760}>2,44</Text>
        </View>
        <View style={styles.View_1378_15761}>
          <Text style={styles.Text_1378_15761}>1,32</Text>
        </View>
        <View style={styles.View_1378_15762}>
          <Text style={styles.Text_1378_15762}>3,55</Text>
        </View>
        <View style={styles.View_1378_15763} />
        <View style={styles.View_1378_15764} />
        <View style={styles.View_1378_15765} />
        <View style={styles.View_1378_15766}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f5/0799/75515fc267c5dd5240567ce91543e186"
            }}
            style={styles.ImageBackground_1378_15767}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f338/c020/8ab0c4ec185b57ed8a5c7c5a114a7629"
            }}
            style={styles.ImageBackground_1378_15768}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ca/7679/cdad8eaf2ac0be66c96e749548a3e9aa"
            }}
            style={styles.ImageBackground_1378_15775}
          />
        </View>
        <View style={styles.View_1378_15782}>
          <Text style={styles.Text_1378_15782}>view details</Text>
        </View>
        <View style={styles.View_1378_15783} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
          }}
          style={styles.ImageBackground_1378_15784}
        />
      </View>
      <View style={styles.View_1378_15785}>
        <View style={styles.View_1378_15786}>
          <Text style={styles.Text_1378_15786}>Manchester</Text>
        </View>
        <View style={styles.View_1378_15787}>
          <Text style={styles.Text_1378_15787}>Liverpool</Text>
        </View>
        <View style={styles.View_1378_15788}>
          <Text style={styles.Text_1378_15788}>25 Apr</Text>
        </View>
        <View style={styles.View_1378_15789}>
          <Text style={styles.Text_1378_15789}>25 Apr</Text>
        </View>
        <View style={styles.View_1378_15790}>
          <Text style={styles.Text_1378_15790}>25 Apr</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
          }}
          style={styles.ImageBackground_1378_15791}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
          }}
          style={styles.ImageBackground_1378_15792}
        />
        <View style={styles.View_1378_15793}>
          <Text style={styles.Text_1378_15793}>1</Text>
        </View>
        <View style={styles.View_1378_15794}>
          <Text style={styles.Text_1378_15794}>Time</Text>
        </View>
        <View style={styles.View_1378_15795}>
          <Text style={styles.Text_1378_15795}>X</Text>
        </View>
        <View style={styles.View_1378_15796}>
          <Text style={styles.Text_1378_15796}>2</Text>
        </View>
        <View style={styles.View_1378_15797}>
          <Text style={styles.Text_1378_15797}>12% </Text>
        </View>
        <View style={styles.View_1378_15798}>
          <Text style={styles.Text_1378_15798}>68%</Text>
        </View>
        <View style={styles.View_1378_15799}>
          <Text style={styles.Text_1378_15799}>20%</Text>
        </View>
        <View style={styles.View_1378_15800}>
          <Text style={styles.Text_1378_15800}>2,44</Text>
        </View>
        <View style={styles.View_1378_15801}>
          <Text style={styles.Text_1378_15801}>1,32</Text>
        </View>
        <View style={styles.View_1378_15802}>
          <Text style={styles.Text_1378_15802}>3,55</Text>
        </View>
        <View style={styles.View_1378_15803} />
        <View style={styles.View_1378_15804} />
        <View style={styles.View_1378_15805} />
        <View style={styles.View_1378_15806}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f5/0799/75515fc267c5dd5240567ce91543e186"
            }}
            style={styles.ImageBackground_1378_15807}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f338/c020/8ab0c4ec185b57ed8a5c7c5a114a7629"
            }}
            style={styles.ImageBackground_1378_15808}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ca/7679/cdad8eaf2ac0be66c96e749548a3e9aa"
            }}
            style={styles.ImageBackground_1378_15815}
          />
        </View>
        <View style={styles.View_1378_15822}>
          <Text style={styles.Text_1378_15822}>view details</Text>
        </View>
        <View style={styles.View_1378_15823} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
          }}
          style={styles.ImageBackground_1378_15824}
        />
      </View>
      <View style={styles.View_1378_15825}>
        <View style={styles.View_1378_15826}>
          <Text style={styles.Text_1378_15826}>Manchester</Text>
        </View>
        <View style={styles.View_1378_15827}>
          <Text style={styles.Text_1378_15827}>Liverpool</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
          }}
          style={styles.ImageBackground_1378_15828}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
          }}
          style={styles.ImageBackground_1378_15829}
        />
        <View style={styles.View_1378_15830}>
          <Text style={styles.Text_1378_15830}>1</Text>
        </View>
        <View style={styles.View_1378_15831}>
          <Text style={styles.Text_1378_15831}>Time</Text>
        </View>
        <View style={styles.View_1378_15832}>
          <Text style={styles.Text_1378_15832}>X</Text>
        </View>
        <View style={styles.View_1378_15833}>
          <Text style={styles.Text_1378_15833}>2</Text>
        </View>
        <View style={styles.View_1378_15834}>
          <Text style={styles.Text_1378_15834}>12% </Text>
        </View>
        <View style={styles.View_1378_15835}>
          <Text style={styles.Text_1378_15835}>68%</Text>
        </View>
        <View style={styles.View_1378_15836}>
          <Text style={styles.Text_1378_15836}>20%</Text>
        </View>
        <View style={styles.View_1378_15837}>
          <Text style={styles.Text_1378_15837}>2,44</Text>
        </View>
        <View style={styles.View_1378_15838}>
          <Text style={styles.Text_1378_15838}>1,32</Text>
        </View>
        <View style={styles.View_1378_15839}>
          <Text style={styles.Text_1378_15839}>3,55</Text>
        </View>
        <View style={styles.View_1378_15840} />
        <View style={styles.View_1378_15841} />
        <View style={styles.View_1378_15842} />
        <View style={styles.View_1378_15843}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f5/0799/75515fc267c5dd5240567ce91543e186"
            }}
            style={styles.ImageBackground_1378_15844}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f338/c020/8ab0c4ec185b57ed8a5c7c5a114a7629"
            }}
            style={styles.ImageBackground_1378_15845}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ca/7679/cdad8eaf2ac0be66c96e749548a3e9aa"
            }}
            style={styles.ImageBackground_1378_15852}
          />
        </View>
        <View style={styles.View_1378_15859}>
          <Text style={styles.Text_1378_15859}>view details</Text>
        </View>
        <View style={styles.View_1378_15860} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
          }}
          style={styles.ImageBackground_1378_15861}
        />
      </View>
      <View style={styles.View_1378_15862}>
        <View style={styles.View_1378_15863}>
          <Text style={styles.Text_1378_15863}>Manchester</Text>
        </View>
        <View style={styles.View_1378_15864}>
          <Text style={styles.Text_1378_15864}>Liverpool</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
          }}
          style={styles.ImageBackground_1378_15865}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
          }}
          style={styles.ImageBackground_1378_15866}
        />
        <View style={styles.View_1378_15867}>
          <Text style={styles.Text_1378_15867}>1</Text>
        </View>
        <View style={styles.View_1378_15868}>
          <Text style={styles.Text_1378_15868}>Time</Text>
        </View>
        <View style={styles.View_1378_15869}>
          <Text style={styles.Text_1378_15869}>X</Text>
        </View>
        <View style={styles.View_1378_15870}>
          <Text style={styles.Text_1378_15870}>2</Text>
        </View>
        <View style={styles.View_1378_15871}>
          <Text style={styles.Text_1378_15871}>12% </Text>
        </View>
        <View style={styles.View_1378_15872}>
          <Text style={styles.Text_1378_15872}>68%</Text>
        </View>
        <View style={styles.View_1378_15873}>
          <Text style={styles.Text_1378_15873}>20%</Text>
        </View>
        <View style={styles.View_1378_15874}>
          <Text style={styles.Text_1378_15874}>2,44</Text>
        </View>
        <View style={styles.View_1378_15875}>
          <Text style={styles.Text_1378_15875}>1,32</Text>
        </View>
        <View style={styles.View_1378_15876}>
          <Text style={styles.Text_1378_15876}>3,55</Text>
        </View>
        <View style={styles.View_1378_15877} />
        <View style={styles.View_1378_15878} />
        <View style={styles.View_1378_15879} />
        <View style={styles.View_1378_15880}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f5/0799/75515fc267c5dd5240567ce91543e186"
            }}
            style={styles.ImageBackground_1378_15881}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f338/c020/8ab0c4ec185b57ed8a5c7c5a114a7629"
            }}
            style={styles.ImageBackground_1378_15882}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ca/7679/cdad8eaf2ac0be66c96e749548a3e9aa"
            }}
            style={styles.ImageBackground_1378_15889}
          />
        </View>
        <View style={styles.View_1378_15896}>
          <Text style={styles.Text_1378_15896}>view details</Text>
        </View>
        <View style={styles.View_1378_15897} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
          }}
          style={styles.ImageBackground_1378_15898}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
          }}
          style={styles.ImageBackground_1378_15899}
        />
      </View>
      <View style={styles.View_1378_15900}>
        <View style={styles.View_1378_15901} />
        <View style={styles.View_1378_15902}>
          <Text style={styles.Text_1378_15902}>BET NOW</Text>
        </View>
      </View>
      <View style={styles.View_1378_15903}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e8f/c737/d841c7c2c1ac385ba64f458998ba834f"
          }}
          style={styles.ImageBackground_1378_15904}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/782e/0f29/f5935e1bdfc7a4c3f0da0d3801681dd2"
          }}
          style={styles.ImageBackground_1378_15905}
        />
      </View>
      <View style={styles.View_1378_15906}>
        <View style={styles.View_I1378_15906_200_649} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c8a/dfd6/6b80ee4cb3d2d137fd351959b6ee251f"
          }}
          style={styles.ImageBackground_I1378_15906_200_655}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33fd/65ea/45cdc6e9be66a7f02bcafb88bff12b8f"
          }}
          style={styles.ImageBackground_I1378_15906_200_656}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e41/4dad/b9186fcb12118e6a2063346bab84e453"
          }}
          style={styles.ImageBackground_I1378_15906_282_5146}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/926f/9b31/37788a3e53bc1cad08fb891a371b0d71"
          }}
          style={styles.ImageBackground_I1378_15906_282_5147}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11a0/81a1/a78833a04721af7363b42f726483b0ca"
          }}
          style={styles.ImageBackground_I1378_15906_282_5148}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c447/5112/eadcf61a2474657e24f19c27d7d7466d"
          }}
          style={styles.ImageBackground_I1378_15906_616_1412}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c871/c57e/0da8b9953f2daed2c01193b27ce0ab7c"
        }}
        style={styles.ImageBackground_1378_15907}
      />
      <View style={styles.View_1378_15908}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7443/dda1/7b51859be688164435b2af746223e72d"
          }}
          style={styles.ImageBackground_I1378_15908_282_6132}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7892/c1ea/de3f766dda80bddeaaca16dbe3647481"
          }}
          style={styles.ImageBackground_I1378_15908_988_6517}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b3f/e3fb/7db2d0b297f2e1a6c142be9c13729ca7"
          }}
          style={styles.ImageBackground_I1378_15908_988_6519}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20e6/a9d7/a808783b1a426c2d8d35eec3c80c4546"
          }}
          style={styles.ImageBackground_I1378_15908_988_6521}
        />
        <View style={styles.View_I1378_15908_988_6522}>
          <Text style={styles.Text_I1378_15908_988_6522}>Home</Text>
        </View>
        <View style={styles.View_I1378_15908_1364_3889}>
          <Text style={styles.Text_I1378_15908_1364_3889}>Results</Text>
        </View>
        <View style={styles.View_I1378_15908_988_6523}>
          <Text style={styles.Text_I1378_15908_988_6523}>History</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f87/946c/3ab8c968fc445931fe1ba6ec9e930ae9"
          }}
          style={styles.ImageBackground_I1378_15908_988_6524}
        />
        <View style={styles.View_I1378_15908_1364_676}>
          <View style={styles.View_I1378_15908_1364_677}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0a8/ceb9/7d14d4cf1aac5331b12b0e3ead2bf7dd"
              }}
              style={styles.ImageBackground_I1378_15908_1364_678}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09c2/2175/507dc86c48ca17d66c7029c154ce5b2c"
              }}
              style={styles.ImageBackground_I1378_15908_1364_682}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e8e/21b4/9cbc39cb1c85fdbc22f2e7a141a74a80"
              }}
              style={styles.ImageBackground_I1378_15908_1364_684}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aad3/6c55/940837b04537e41909ae352fbbb04d32"
              }}
              style={styles.ImageBackground_I1378_15908_1364_686}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0eff/a0f3/74ccd44d9775c70cd68d2c38af17e92d"
              }}
              style={styles.ImageBackground_I1378_15908_1364_688}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cdb/13ff/2a5c1b5900421cb08c2b0ce2c7e119a7"
              }}
              style={styles.ImageBackground_I1378_15908_1364_690}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82e5/2ac0/2354ae66fa38914669617f8d242c1963"
              }}
              style={styles.ImageBackground_I1378_15908_1364_692}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_15908_1364_694}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82e5/2ac0/2354ae66fa38914669617f8d242c1963"
              }}
              style={styles.ImageBackground_I1378_15908_1364_696}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_15908_1364_698}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_15908_1364_700}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cdc/6045/dbc06947304927748b610ea000f55d73"
              }}
              style={styles.ImageBackground_I1378_15908_1364_702}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/720b/17b3/16ce33446d37af6c6285cc39c2270cc9"
              }}
              style={styles.ImageBackground_I1378_15908_1364_704}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cded/aea6/3ba0e67f257c63a7bdf60f41772bf286"
              }}
              style={styles.ImageBackground_I1378_15908_1364_706}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cded/aea6/3ba0e67f257c63a7bdf60f41772bf286"
              }}
              style={styles.ImageBackground_I1378_15908_1364_708}
            />
          </View>
          <View style={styles.View_I1378_15908_1364_710}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6c9/c4bc/f5025ebf9fa21253256e8e6609c12f95"
              }}
              style={styles.ImageBackground_I1378_15908_1364_711}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/871f/5cef/8cedd9500a12408982f2e93fea88bb62"
              }}
              style={styles.ImageBackground_I1378_15908_1364_713}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d07/0616/e9f729e081d510fa1e2c9979c6098443"
              }}
              style={styles.ImageBackground_I1378_15908_1364_715}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2475/5ccc/94641c3e81d91e9b3057e334dede2698"
              }}
              style={styles.ImageBackground_I1378_15908_1364_717}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8cd/ebf9/8269319277d39e1d4e040e0ed92180ed"
              }}
              style={styles.ImageBackground_I1378_15908_1364_719}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9eba/d401/4a377409d3c95f7296fa162b363831e2"
              }}
              style={styles.ImageBackground_I1378_15908_1364_721}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f112/243b/2b142e314a54e1abb992ac34be8c08d4"
              }}
              style={styles.ImageBackground_I1378_15908_1364_723}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1378_15909} />
      <View style={styles.View_1378_15910} />
      <View style={styles.View_1378_15911} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bd3/4a2d/41834b77885a1ba373f47ebd171cc99b"
        }}
        style={styles.ImageBackground_1378_15912}
      />
      <View style={styles.View_1378_15916}>
        <Text style={styles.Text_1378_15916}>Your bid was accepted</Text>
      </View>
      <View style={styles.View_1378_15917}>
        <Text style={styles.Text_1378_15917}>Thank you!</Text>
      </View>
      <View style={styles.View_1378_15918}>
        <View style={styles.View_1378_15919} />
        <View style={styles.View_1378_15920}>
          <Text style={styles.Text_1378_15920}>oK</Text>
        </View>
      </View>
      <View style={styles.View_1378_15921}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6df/0ff0/41c65edfd01d39e945a2ad680f48f7a5"
          }}
          style={styles.ImageBackground_1378_15922}
        />
      </View>
      <View style={styles.View_1378_15924}>
        <Text style={styles.Text_1378_15924}>Confirmation</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_1378_15525: {
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
  View_1378_15526: {
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
  ImageBackground_1378_15527: {
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
  View_1378_15528: {
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
  View_1378_15529: {
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
  View_1378_15530: {
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
  View_1378_15531: {
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
  View_1378_15532: {
    width: 73,
    minWidth: 73,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 134,
    top: 12
  },
  Text_1378_15532: {
    color: "rgba(0, 42, 173, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15533: {
    width: 21,
    height: 21,
    top: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 307
  },
  View_1378_15535: {
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
  View_1378_15536: {
    width: 93,
    minWidth: 93,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 46,
    top: 0
  },
  Text_1378_15536: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_15537: {
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
  View_1378_15538: {
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
  View_1378_15539: {
    width: 13.031797409057617,
    minWidth: 13.031797409057617,
    minHeight: 6.9001688957214355,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.638427734375,
    top: 36.225830078125
  },
  Text_1378_15539: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5.037647724151611,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_15540: {
    width: 16.072547912597656,
    minWidth: 16.072547912597656,
    minHeight: 32.34454345703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.3349609375,
    top: 7.743896484375
  },
  Text_1378_15540: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21.600675582885742,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15541: {
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
  View_1378_15542: {
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
  View_1378_15543: {
    width: 43.87371063232422,
    minWidth: 43.87371063232422,
    height: 47.00740051269531,
    minHeight: 47.00740051269531,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45.17681884765625,
    top: 0
  },
  View_1378_15544: {
    width: 10.425436973571777,
    minWidth: 10.425436973571777,
    minHeight: 6.9001688957214355,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 107.294921875,
    top: 36.225830078125
  },
  Text_1378_15544: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5.037647724151611,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_15545: {
    width: 9.991044044494629,
    minWidth: 9.991044044494629,
    minHeight: 6.9001688957214355,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 153.3411865234375,
    top: 36.225830078125
  },
  Text_1378_15545: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5.037647724151611,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_15546: {
    width: 8.687864303588867,
    minWidth: 8.687864303588867,
    minHeight: 6.9001688957214355,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 63.421630859375,
    top: 36.225830078125
  },
  Text_1378_15546: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5.037647724151611,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_15547: {
    width: 31.710704803466797,
    minWidth: 31.710704803466797,
    minHeight: 32.34454345703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 51.25830078125,
    top: 7.743896484375
  },
  Text_1378_15547: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21.600675582885742,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15548: {
    width: 31.710704803466797,
    minWidth: 31.710704803466797,
    minHeight: 32.34454345703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 96.43505859375,
    top: 7.743896484375
  },
  Text_1378_15548: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21.600675582885742,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15549: {
    width: 31.710704803466797,
    minWidth: 31.710704803466797,
    minHeight: 32.34454345703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 142.4814453125,
    top: 7.743896484375
  },
  Text_1378_15549: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21.600675582885742,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15550: {
    width: 180,
    height: 38,
    top: 67,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  View_1378_15551: {
    width: 180,
    height: 36,
    top: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1378_15552: {
    width: 201.3661346435547,
    minWidth: 201.3661346435547,
    minHeight: 16.264684677124023,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28.5595703125,
    top: 118.746826171875
  },
  Text_1378_15552: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13.264684677124023,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_15553: {
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
  View_1378_15554: {
    width: 31.00103187561035,
    height: 23.862579345703125,
    top: -2.43115234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -0.00048828125
  },
  ImageBackground_1378_15555: {
    width: 31.00103187561035,
    height: 23.862579345703125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1378_15580: {
    width: 171.0069122314453,
    minWidth: 171.0069122314453,
    minHeight: 34.08576202392578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59.76123046875,
    top: 75.026611328125
  },
  Text_1378_15580: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.125587463378906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_15581: {
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
  View_1378_15582: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 0
  },
  Text_1378_15582: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15583: {
    width: 36,
    minWidth: 36,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_1378_15583: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15584: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 0
  },
  Text_1378_15584: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15585: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 173,
    top: 0
  },
  Text_1378_15585: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15586: {
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
  View_1378_15587: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 0
  },
  Text_1378_15587: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15588: {
    width: 36,
    minWidth: 36,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_1378_15588: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15589: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 0
  },
  Text_1378_15589: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15590: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 173,
    top: 0
  },
  Text_1378_15590: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15591: {
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
  ImageBackground_1378_15592: {
    width: 11.24303913116455,
    height: 11.243053436279297,
    top: 4.3782958984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.378173828125
  },
  ImageBackground_1378_15593: {
    width: 12.13059139251709,
    height: 12.947348594665527,
    top: 4.5498046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.1580810546875
  },
  ImageBackground_1378_15600: {
    width: 14.126415252685547,
    height: 13.6608247756958,
    top: 4.37841796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.0892333984375
  },
  View_1378_15607: {
    width: 16,
    minWidth: 16,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 379
  },
  Text_1378_15607: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15608: {
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
  View_1378_15609: {
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
  View_1378_15610: {
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
  View_1378_15611: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 10
  },
  Text_1378_15611: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15612: {
    width: 71.6960678100586,
    minWidth: 71.6960678100586,
    minHeight: 15.208256721496582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 222,
    top: 10
  },
  Text_1378_15612: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15613: {
    width: 83.32030487060547,
    minWidth: 83.32030487060547,
    minHeight: 38.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 10
  },
  Text_1378_15613: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15614: {
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
  ImageBackground_1378_15615: {
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
  View_1378_15616: {
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
  View_1378_15617: {
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
  View_1378_15618: {
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
  View_1378_15619: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 10
  },
  Text_1378_15619: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15620: {
    width: 71.6960678100586,
    minWidth: 71.6960678100586,
    minHeight: 15.208256721496582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 222,
    top: 10
  },
  Text_1378_15620: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15621: {
    width: 83.32030487060547,
    minWidth: 83.32030487060547,
    minHeight: 38.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 10
  },
  Text_1378_15621: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15622: {
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
  ImageBackground_1378_15623: {
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
  View_1378_15624: {
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
  View_1378_15625: {
    width: 60.14640426635742,
    minWidth: 60.14640426635742,
    minHeight: 14.839045524597168,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.9453125,
    top: 18.160888671875
  },
  Text_1378_15625: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15626: {
    width: 42.40032196044922,
    minWidth: 42.40032196044922,
    minHeight: 10.460813522338867,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 117,
    top: 18
  },
  Text_1378_15626: {
    color: "rgba(51, 198, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15627: {
    width: 20,
    minWidth: 20,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 6
  },
  Text_1378_15627: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15628: {
    width: 26,
    minWidth: 26,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60,
    top: 6
  },
  Text_1378_15628: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15629: {
    width: 22,
    minWidth: 22,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 113,
    top: 6
  },
  Text_1378_15629: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15630: {
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
  View_1378_15631: {
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
  View_1378_15632: {
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
  View_1378_15633: {
    width: 16,
    minWidth: 16,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 511
  },
  Text_1378_15633: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15634: {
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
  View_1378_15635: {
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
  View_1378_15636: {
    width: 60.14640426635742,
    minWidth: 60.14640426635742,
    minHeight: 14.839045524597168,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 18
  },
  Text_1378_15636: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15637: {
    width: 42.40032196044922,
    minWidth: 42.40032196044922,
    minHeight: 10.460813522338867,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 117,
    top: 18
  },
  Text_1378_15637: {
    color: "rgba(51, 198, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15638: {
    width: 71.88163757324219,
    minWidth: 71.88163757324219,
    minHeight: 12.941250801086426,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 63,
    top: 18
  },
  Text_1378_15638: {
    color: "rgba(255, 184, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15639: {
    width: 20,
    minWidth: 20,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 6
  },
  Text_1378_15639: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15640: {
    width: 26,
    minWidth: 26,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60,
    top: 6
  },
  Text_1378_15640: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15641: {
    width: 22,
    minWidth: 22,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 113,
    top: 6
  },
  Text_1378_15641: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15642: {
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
  View_1378_15643: {
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
  View_1378_15644: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 269,
    top: 378
  },
  Text_1378_15644: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_15645: {
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
  View_1378_15646: {
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
  ImageBackground_1378_15647: {
    width: 11.24303913116455,
    height: 11.243053436279297,
    top: 4.3782958984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.378173828125
  },
  ImageBackground_1378_15648: {
    width: 12.13059139251709,
    height: 12.947348594665527,
    top: 4.5498046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.1580810546875
  },
  ImageBackground_1378_15655: {
    width: 14.126415252685547,
    height: 13.6608247756958,
    top: 4.37841796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.0892333984375
  },
  View_1378_15662: {
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
  View_1378_15663: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 269,
    top: 510
  },
  Text_1378_15663: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_1378_15664: {
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
  View_1378_15665: {
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
  View_1378_15666: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 75
  },
  Text_1378_15666: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15667: {
    width: 71.6960678100586,
    minWidth: 71.6960678100586,
    minHeight: 15.208256721496582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 248,
    top: 75
  },
  Text_1378_15667: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15668: {
    width: 83.32030487060547,
    minWidth: 83.32030487060547,
    minHeight: 38.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 156,
    top: 75
  },
  Text_1378_15668: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15669: {
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
  ImageBackground_1378_15670: {
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
  View_1378_15671: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82,
    top: 111
  },
  Text_1378_15671: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15672: {
    width: 36,
    minWidth: 36,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 111
  },
  Text_1378_15672: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15673: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 134,
    top: 111
  },
  Text_1378_15673: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15674: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 111
  },
  Text_1378_15674: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15675: {
    width: 16,
    minWidth: 16,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 143
  },
  Text_1378_15675: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15676: {
    width: 60.14640426635742,
    minWidth: 60.14640426635742,
    minHeight: 14.839045524597168,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77.9453125,
    top: 149.160888671875
  },
  Text_1378_15676: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15677: {
    width: 42.40032196044922,
    minWidth: 42.40032196044922,
    minHeight: 10.460813522338867,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 184,
    top: 149
  },
  Text_1378_15677: {
    color: "rgba(51, 198, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15678: {
    width: 71.88163757324219,
    minWidth: 71.88163757324219,
    minHeight: 12.941250801086426,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 149
  },
  Text_1378_15678: {
    color: "rgba(255, 184, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15679: {
    width: 20,
    minWidth: 20,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 137
  },
  Text_1378_15679: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15680: {
    width: 26,
    minWidth: 26,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127,
    top: 137
  },
  Text_1378_15680: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15681: {
    width: 22,
    minWidth: 22,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180,
    top: 137
  },
  Text_1378_15681: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15682: {
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
  View_1378_15683: {
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
  View_1378_15684: {
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
  View_1378_15685: {
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
  ImageBackground_1378_15686: {
    width: 11.24303913116455,
    height: 11.243053436279297,
    top: 109.378173828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 277.3779296875
  },
  ImageBackground_1378_15687: {
    width: 12.13059139251709,
    height: 12.947348594665527,
    top: 109.5498046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 278.158203125
  },
  ImageBackground_1378_15694: {
    width: 14.126415252685547,
    height: 13.6608247756958,
    top: 109.37841796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 277.08935546875
  },
  View_1378_15701: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 252,
    top: 142
  },
  Text_1378_15701: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_15702: {
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
  ImageBackground_1378_15703: {
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
  View_1378_15704: {
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
  View_1378_15705: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 20
  },
  Text_1378_15705: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15706: {
    width: 71.6960678100586,
    minWidth: 71.6960678100586,
    minHeight: 15.208256721496582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 248,
    top: 20
  },
  Text_1378_15706: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15707: {
    width: 83.32030487060547,
    minWidth: 83.32030487060547,
    minHeight: 38.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 156,
    top: 20
  },
  Text_1378_15707: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15708: {
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
  ImageBackground_1378_15709: {
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
  View_1378_15710: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82,
    top: 56
  },
  Text_1378_15710: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15711: {
    width: 36,
    minWidth: 36,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 56
  },
  Text_1378_15711: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15712: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 134,
    top: 56
  },
  Text_1378_15712: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15713: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 56
  },
  Text_1378_15713: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15714: {
    width: 16,
    minWidth: 16,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 88
  },
  Text_1378_15714: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15715: {
    width: 60.14640426635742,
    minWidth: 60.14640426635742,
    minHeight: 14.839045524597168,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77.9453125,
    top: 94.160888671875
  },
  Text_1378_15715: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15716: {
    width: 42.40032196044922,
    minWidth: 42.40032196044922,
    minHeight: 10.460813522338867,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 184,
    top: 94
  },
  Text_1378_15716: {
    color: "rgba(51, 198, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15717: {
    width: 71.88163757324219,
    minWidth: 71.88163757324219,
    minHeight: 12.941250801086426,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 94
  },
  Text_1378_15717: {
    color: "rgba(255, 184, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15718: {
    width: 20,
    minWidth: 20,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 82
  },
  Text_1378_15718: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15719: {
    width: 26,
    minWidth: 26,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127,
    top: 82
  },
  Text_1378_15719: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15720: {
    width: 22,
    minWidth: 22,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180,
    top: 82
  },
  Text_1378_15720: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15721: {
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
  View_1378_15722: {
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
  View_1378_15723: {
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
  View_1378_15724: {
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
  ImageBackground_1378_15725: {
    width: 11.24303913116455,
    height: 11.243053436279297,
    top: 4.378173828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.378173828125
  },
  ImageBackground_1378_15726: {
    width: 12.13059139251709,
    height: 12.947348594665527,
    top: 4.5498046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.1580810546875
  },
  ImageBackground_1378_15733: {
    width: 14.126415252685547,
    height: 13.6608247756958,
    top: 4.37841796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.0892333984375
  },
  View_1378_15740: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 252,
    top: 87
  },
  Text_1378_15740: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_15741: {
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
  ImageBackground_1378_15742: {
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
  View_1378_15743: {
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
  View_1378_15744: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 20
  },
  Text_1378_15744: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15745: {
    width: 71.6960678100586,
    minWidth: 71.6960678100586,
    minHeight: 15.208256721496582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 248,
    top: 20
  },
  Text_1378_15745: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15746: {
    width: 83.32030487060547,
    minWidth: 83.32030487060547,
    minHeight: 38.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 156,
    top: 20
  },
  Text_1378_15746: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15747: {
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
  ImageBackground_1378_15748: {
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
  View_1378_15749: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82,
    top: 56
  },
  Text_1378_15749: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15750: {
    width: 36,
    minWidth: 36,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 56
  },
  Text_1378_15750: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15751: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 134,
    top: 56
  },
  Text_1378_15751: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15752: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 56
  },
  Text_1378_15752: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15753: {
    width: 31,
    minWidth: 31,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 88
  },
  Text_1378_15753: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_15754: {
    width: 31,
    minWidth: 31,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 222
  },
  Text_1378_15754: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_15755: {
    width: 31,
    minWidth: 31,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 354
  },
  Text_1378_15755: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_15756: {
    width: 31,
    minWidth: 31,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 485
  },
  Text_1378_15756: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_15757: {
    width: 60.14640426635742,
    minWidth: 60.14640426635742,
    minHeight: 14.839045524597168,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77.9453125,
    top: 94.160888671875
  },
  Text_1378_15757: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15758: {
    width: 42.40032196044922,
    minWidth: 42.40032196044922,
    minHeight: 10.460813522338867,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 184,
    top: 94
  },
  Text_1378_15758: {
    color: "rgba(51, 198, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15759: {
    width: 71.88163757324219,
    minWidth: 71.88163757324219,
    minHeight: 12.941250801086426,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 94
  },
  Text_1378_15759: {
    color: "rgba(255, 184, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15760: {
    width: 20,
    minWidth: 20,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 82
  },
  Text_1378_15760: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15761: {
    width: 26,
    minWidth: 26,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127,
    top: 82
  },
  Text_1378_15761: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15762: {
    width: 22,
    minWidth: 22,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180,
    top: 82
  },
  Text_1378_15762: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15763: {
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
  View_1378_15764: {
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
  View_1378_15765: {
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
  View_1378_15766: {
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
  ImageBackground_1378_15767: {
    width: 11.24303913116455,
    height: 11.243053436279297,
    top: 4.378173828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.378173828125
  },
  ImageBackground_1378_15768: {
    width: 12.13059139251709,
    height: 12.947348594665527,
    top: 4.5498046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.1580810546875
  },
  ImageBackground_1378_15775: {
    width: 14.126415252685547,
    height: 13.6608247756958,
    top: 4.37841796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.0892333984375
  },
  View_1378_15782: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 252,
    top: 87
  },
  Text_1378_15782: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_15783: {
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
  ImageBackground_1378_15784: {
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
  View_1378_15785: {
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
  View_1378_15786: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 20
  },
  Text_1378_15786: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15787: {
    width: 71.6960678100586,
    minWidth: 71.6960678100586,
    minHeight: 15.208256721496582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 248,
    top: 20
  },
  Text_1378_15787: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15788: {
    width: 83.32030487060547,
    minWidth: 83.32030487060547,
    minHeight: 38.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 156,
    top: 20
  },
  Text_1378_15788: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15789: {
    width: 83.32030487060547,
    minWidth: 83.32030487060547,
    minHeight: 38.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 156,
    top: 153
  },
  Text_1378_15789: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15790: {
    width: 83.32030487060547,
    minWidth: 83.32030487060547,
    minHeight: 38.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 156,
    top: 286
  },
  Text_1378_15790: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15791: {
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
  ImageBackground_1378_15792: {
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
  View_1378_15793: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82,
    top: 56
  },
  Text_1378_15793: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15794: {
    width: 36,
    minWidth: 36,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 56
  },
  Text_1378_15794: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15795: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 134,
    top: 56
  },
  Text_1378_15795: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15796: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 56
  },
  Text_1378_15796: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15797: {
    width: 60.14640426635742,
    minWidth: 60.14640426635742,
    minHeight: 14.839045524597168,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77.9453125,
    top: 94.160888671875
  },
  Text_1378_15797: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15798: {
    width: 42.40032196044922,
    minWidth: 42.40032196044922,
    minHeight: 10.460813522338867,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 184,
    top: 94
  },
  Text_1378_15798: {
    color: "rgba(51, 198, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15799: {
    width: 71.88163757324219,
    minWidth: 71.88163757324219,
    minHeight: 12.941250801086426,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 94
  },
  Text_1378_15799: {
    color: "rgba(255, 184, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15800: {
    width: 20,
    minWidth: 20,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 82
  },
  Text_1378_15800: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15801: {
    width: 26,
    minWidth: 26,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127,
    top: 82
  },
  Text_1378_15801: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15802: {
    width: 22,
    minWidth: 22,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180,
    top: 82
  },
  Text_1378_15802: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15803: {
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
  View_1378_15804: {
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
  View_1378_15805: {
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
  View_1378_15806: {
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
  ImageBackground_1378_15807: {
    width: 11.24303913116455,
    height: 11.243053436279297,
    top: 4.378173828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.378173828125
  },
  ImageBackground_1378_15808: {
    width: 12.13059139251709,
    height: 12.947348594665527,
    top: 4.5498046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.1580810546875
  },
  ImageBackground_1378_15815: {
    width: 14.126415252685547,
    height: 13.6608247756958,
    top: 4.37841796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.0892333984375
  },
  View_1378_15822: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 252,
    top: 87
  },
  Text_1378_15822: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_15823: {
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
  ImageBackground_1378_15824: {
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
  View_1378_15825: {
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
  View_1378_15826: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 20
  },
  Text_1378_15826: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15827: {
    width: 71.6960678100586,
    minWidth: 71.6960678100586,
    minHeight: 15.208256721496582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 248,
    top: 20
  },
  Text_1378_15827: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15828: {
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
  ImageBackground_1378_15829: {
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
  View_1378_15830: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82,
    top: 56
  },
  Text_1378_15830: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15831: {
    width: 36,
    minWidth: 36,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 56
  },
  Text_1378_15831: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15832: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 134,
    top: 56
  },
  Text_1378_15832: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15833: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 56
  },
  Text_1378_15833: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15834: {
    width: 60.14640426635742,
    minWidth: 60.14640426635742,
    minHeight: 14.839045524597168,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77.9453125,
    top: 94.160888671875
  },
  Text_1378_15834: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15835: {
    width: 42.40032196044922,
    minWidth: 42.40032196044922,
    minHeight: 10.460813522338867,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 184,
    top: 94
  },
  Text_1378_15835: {
    color: "rgba(51, 198, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15836: {
    width: 71.88163757324219,
    minWidth: 71.88163757324219,
    minHeight: 12.941250801086426,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 94
  },
  Text_1378_15836: {
    color: "rgba(255, 184, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15837: {
    width: 20,
    minWidth: 20,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 82
  },
  Text_1378_15837: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15838: {
    width: 26,
    minWidth: 26,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127,
    top: 82
  },
  Text_1378_15838: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15839: {
    width: 22,
    minWidth: 22,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180,
    top: 82
  },
  Text_1378_15839: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15840: {
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
  View_1378_15841: {
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
  View_1378_15842: {
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
  View_1378_15843: {
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
  ImageBackground_1378_15844: {
    width: 11.24303913116455,
    height: 11.243053436279297,
    top: 4.378173828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.378173828125
  },
  ImageBackground_1378_15845: {
    width: 12.13059139251709,
    height: 12.947348594665527,
    top: 4.5498046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.1580810546875
  },
  ImageBackground_1378_15852: {
    width: 14.126415252685547,
    height: 13.6608247756958,
    top: 4.37841796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.0892333984375
  },
  View_1378_15859: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 252,
    top: 87
  },
  Text_1378_15859: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_15860: {
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
  ImageBackground_1378_15861: {
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
  View_1378_15862: {
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
  View_1378_15863: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 20
  },
  Text_1378_15863: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15864: {
    width: 71.6960678100586,
    minWidth: 71.6960678100586,
    minHeight: 15.208256721496582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 249,
    top: 20
  },
  Text_1378_15864: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15865: {
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
  ImageBackground_1378_15866: {
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
  View_1378_15867: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82,
    top: 56
  },
  Text_1378_15867: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15868: {
    width: 36,
    minWidth: 36,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 56
  },
  Text_1378_15868: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15869: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 134,
    top: 56
  },
  Text_1378_15869: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15870: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 56
  },
  Text_1378_15870: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15871: {
    width: 60.14640426635742,
    minWidth: 60.14640426635742,
    minHeight: 14.839045524597168,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77.9453125,
    top: 94.160888671875
  },
  Text_1378_15871: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15872: {
    width: 42.40032196044922,
    minWidth: 42.40032196044922,
    minHeight: 10.460813522338867,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 184,
    top: 94
  },
  Text_1378_15872: {
    color: "rgba(51, 198, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15873: {
    width: 71.88163757324219,
    minWidth: 71.88163757324219,
    minHeight: 12.941250801086426,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 94
  },
  Text_1378_15873: {
    color: "rgba(255, 184, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15874: {
    width: 20,
    minWidth: 20,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 82
  },
  Text_1378_15874: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15875: {
    width: 26,
    minWidth: 26,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127,
    top: 82
  },
  Text_1378_15875: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15876: {
    width: 22,
    minWidth: 22,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180,
    top: 82
  },
  Text_1378_15876: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15877: {
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
  View_1378_15878: {
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
  View_1378_15879: {
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
  View_1378_15880: {
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
  ImageBackground_1378_15881: {
    width: 11.24303913116455,
    height: 11.243053436279297,
    top: 4.378173828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.378173828125
  },
  ImageBackground_1378_15882: {
    width: 12.13059139251709,
    height: 12.947348594665527,
    top: 4.5498046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.1580810546875
  },
  ImageBackground_1378_15889: {
    width: 14.126415252685547,
    height: 13.6608247756958,
    top: 4.37841796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.0892333984375
  },
  View_1378_15896: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 252,
    top: 87
  },
  Text_1378_15896: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_15897: {
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
  ImageBackground_1378_15898: {
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
  ImageBackground_1378_15899: {
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
  View_1378_15900: {
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
  View_1378_15901: {
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
  View_1378_15902: {
    width: 61,
    top: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36
  },
  Text_1378_15902: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_15903: {
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
  ImageBackground_1378_15904: {
    width: 19,
    height: 18,
    top: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10
  },
  ImageBackground_1378_15905: {
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
  View_1378_15906: {
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
  View_I1378_15906_200_649: {
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
  ImageBackground_I1378_15906_200_655: {
    flexGrow: 1,
    width: 68.78099822998047,
    height: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 10
  },
  ImageBackground_I1378_15906_200_656: {
    flexGrow: 1,
    width: 10,
    height: 6.110935688018799,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 344,
    top: 14
  },
  ImageBackground_I1378_15906_282_5146: {
    flexGrow: 1,
    width: 33,
    height: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 232,
    top: 6
  },
  ImageBackground_I1378_15906_282_5147: {
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
  ImageBackground_I1378_15906_282_5148: {
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
  ImageBackground_I1378_15906_616_1412: {
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
  ImageBackground_1378_15907: {
    width: 21,
    height: 14.766021728515625,
    top: 83,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30
  },
  View_1378_15908: {
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
  ImageBackground_I1378_15908_282_6132: {
    flexGrow: 1,
    width: 375,
    height: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I1378_15908_988_6517: {
    flexGrow: 1,
    width: 49.65380859375,
    height: 6.837890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 110,
    top: 36
  },
  ImageBackground_I1378_15908_988_6519: {
    flexGrow: 1,
    width: 30.00023651123047,
    height: 19.159626007080078,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 10
  },
  ImageBackground_I1378_15908_988_6521: {
    flexGrow: 1,
    width: 20,
    height: 18.33333396911621,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 11
  },
  View_I1378_15908_988_6522: {
    flexGrow: 1,
    width: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 34
  },
  Text_I1378_15908_988_6522: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1378_15908_1364_3889: {
    flexGrow: 1,
    width: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 217,
    top: 34
  },
  Text_I1378_15908_1364_3889: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1378_15908_988_6523: {
    flexGrow: 1,
    width: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 311,
    top: 34
  },
  Text_I1378_15908_988_6523: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_I1378_15908_988_6524: {
    flexGrow: 1,
    width: 20,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 314.763671875,
    top: 11
  },
  View_I1378_15908_1364_676: {
    flexGrow: 1,
    width: 26.763774871826172,
    height: 21.32741928100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 219,
    top: 9
  },
  View_I1378_15908_1364_677: {
    width: 26.763774871826172,
    height: 21.32741928100586,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_15908_1364_678: {
    width: 26.763774871826172,
    height: 7.109440326690674,
    top: 14.2177734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_15908_1364_682: {
    width: 3.029043436050415,
    height: 5.436952590942383,
    top: 15.890380859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.700439453125
  },
  ImageBackground_I1378_15908_1364_684: {
    width: 1.4359464645385742,
    height: 2.9269301891326904,
    top: 16.3095703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.00128173828125
  },
  ImageBackground_I1378_15908_1364_686: {
    width: 1.634328842163086,
    height: 2.510079860687256,
    top: 18.817138671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.42901611328125
  },
  ImageBackground_I1378_15908_1364_688: {
    width: 2.2307350635528564,
    height: 3.76133394241333,
    top: 14.218505859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.23651123046875
  },
  ImageBackground_I1378_15908_1364_690: {
    width: 1.4360383749008179,
    height: 2.926727533340454,
    top: 16.3095703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.3260498046875
  },
  ImageBackground_I1378_15908_1364_692: {
    width: 3.6636908054351807,
    height: 0.836363673210144,
    top: 15.890869140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.06634521484375
  },
  ImageBackground_I1378_15908_1364_694: {
    width: 4.219037055969238,
    height: 0.836363673210144,
    top: 18.818115234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.42901611328125
  },
  ImageBackground_I1378_15908_1364_696: {
    width: 3.901637077331543,
    height: 0.836363673210144,
    top: 17.1455078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.632080078125
  },
  ImageBackground_I1378_15908_1364_698: {
    width: 4.363308906555176,
    height: 0.836363673210144,
    top: 16.309326171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.5999755859375
  },
  ImageBackground_I1378_15908_1364_700: {
    width: 4.324418067932129,
    height: 0.836363673210144,
    top: 16.309326171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.8389892578125
  },
  ImageBackground_I1378_15908_1364_702: {
    width: 10.761491775512695,
    height: 0.836363673210144,
    top: 18.39990234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.00128173828125
  },
  ImageBackground_I1378_15908_1364_704: {
    width: 13.381818771362305,
    height: 17.98181915283203,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.6907958984375
  },
  ImageBackground_I1378_15908_1364_706: {
    width: 6.869472980499268,
    height: 0.836363673210144,
    top: 14.21826171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.18206787109375
  },
  ImageBackground_I1378_15908_1364_708: {
    width: 6.8698930740356445,
    height: 0.836363673210144,
    top: 14.21826171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.7122802734375
  },
  View_I1378_15908_1364_710: {
    width: 9.199999809265137,
    height: 9.19999885559082,
    top: 2.0888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.7757568359375
  },
  ImageBackground_I1378_15908_1364_711: {
    width: 9.199999809265137,
    height: 9.19999885559082,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_15908_1364_713: {
    width: 3.3703079223632812,
    height: 2.6731395721435547,
    top: 0.125732421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.1895751953125
  },
  ImageBackground_I1378_15908_1364_715: {
    width: 2.113673686981201,
    height: 3.861211061477661,
    top: 3.856201171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.0693359375
  },
  ImageBackground_I1378_15908_1364_717: {
    width: 4.0476789474487305,
    height: 1.6777453422546387,
    top: 7.199951171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.5762939453125
  },
  ImageBackground_I1378_15908_1364_719: {
    width: 2.1152143478393555,
    height: 3.860804319381714,
    top: 3.856689453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.0166015625
  },
  ImageBackground_I1378_15908_1364_721: {
    width: 3.369419813156128,
    height: 2.6729161739349365,
    top: 0.1259765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.6429443359375
  },
  ImageBackground_I1378_15908_1364_723: {
    width: 3.915950298309326,
    height: 3.763637065887451,
    top: 2.509033203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.64501953125
  },
  View_1378_15909: {
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
  View_1378_15910: {
    width: 342,
    minWidth: 342,
    height: 290,
    minHeight: 290,
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
  View_1378_15911: {
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
  ImageBackground_1378_15912: {
    width: 71,
    height: 71,
    top: 179,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 155
  },
  View_1378_15916: {
    width: 142,
    minWidth: 142,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 118,
    top: 299
  },
  Text_1378_15916: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15917: {
    width: 89,
    minWidth: 89,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 144,
    top: 270
  },
  Text_1378_15917: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_15918: {
    width: 134,
    minWidth: 134,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 122,
    top: 348,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1378_15919: {
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
  View_1378_15920: {
    width: 19,
    top: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 57
  },
  Text_1378_15920: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15921: {
    width: 21,
    minWidth: 21,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 323,
    top: 121,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1378_15922: {
    width: 20.999181747436523,
    height: 20.853492736816406,
    top: -0.000244140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.0015869140625
  },
  View_1378_15924: {
    width: 82,
    minWidth: 82,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 147,
    top: 122
  },
  Text_1378_15924: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
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
