import { yellow600, blue700, grey900 } from 'material-ui/styles/colors'

export default {
  contestTitle: 'VolgaCTF 2016 Finals',
  primary1Color: yellow600,
  accent1Color: blue700,
  headerColor: grey900,
  indexTitle: 'Hi there!',
  indexDescription: 'Welcome to VolgaCTF 2016 Finals!\\\nFlag format is `^[\\da-f]{32}=$`\\\nYou should submit flags to `master.finals.volgactf.ru` (`10.0.100.2`). You can submit **no more** than 200 flags in 60 second period.\\\nEach flag lives for 5 minutes. New round is triggered every 2 minutes. Every minute the system randomly chooses 2 living flags and tries to extract them from each service.\\\nBelow are the links which you may find useful:\n  - [Themis Finals Attack Protocol](https://github.com/aspyatkin/themis-finals-attack-protocol) - attack protocol\n  - [themis.finals.attack.helper](https://github.com/aspyatkin/themis-finals-attack-helper-py) - attack helper library for Python 2 & 3\\\nGood luck!',
  contestLogo: {
    src: 'src/images/volgactf-logo.svg',
    style: {
      height: '55px',
      marginTop: '5px',
      marginRight: '20px'
    },
    dist: '/assets/images/volgactf-logo.svg'
  }
}
