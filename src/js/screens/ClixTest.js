import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// grommet layout
import Box from 'grommet/components/Box';
import Layer from 'grommet/components/Layer';

// grommet structure
import App from 'grommet/components/App';
import Article from 'grommet/components/Article';
import Footer from 'grommet/components/Footer';
import Header from 'grommet/components/Header';
import Notification from 'grommet/components/Notification';
import Section from 'grommet/components/Section';

// grommet text
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import Paragraph from 'grommet/components/Paragraph';

// grommet controls
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import Menu from 'grommet/components/Menu';

// grommet forms
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';

// grommet listing
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Table from 'grommet/components/Table';
import TableHeader from 'grommet/components/TableHeader';
import TableRow from 'grommet/components/TableRow';

// grommet icons
import AddIcon from 'grommet/components/icons/base/Add';
import CloseIcon from 'grommet/components/icons/base/Close';
import CodeIcon from 'grommet/components/icons/base/Code';
import DeployIcon from 'grommet/components/icons/base/Deploy';
import EditIcon from 'grommet/components/icons/base/Edit';
import HomeIcon from 'grommet/components/icons/base/Home';
import LinkDownIcon from 'grommet/components/icons/base/LinkDown';
import LinkUpIcon from 'grommet/components/icons/base/LinkUp';
import SubtractCircleIcon from 'grommet/components/icons/base/SubtractCircle';
import TrashIcon from 'grommet/components/icons/base/Trash';
import ViewIcon from 'grommet/components/icons/base/View';
import Logo from 'grommet/components/icons/Grommet';

// custom
import NavControl from '../components/NavControl';

// import CLIxLogo from '../../clix-logo.png';

const QUESTIONS = [
  {
    name: 'Question name', type: 'Multiple choice', editable: true
  },
  {
    name: 'Question name', type: 'Short answer', editable: true
  },
  {
    name: 'Question name', type: 'Numerical response', editable: false
  },
  {
    name: 'Question name', type: 'File upload', editable: true
  },
  {
    name: 'Question name', type: 'ART', editable: true
  },
  {
    name: 'Question name', type: 'Image sequence', editable: false
  },
  {
    name: 'Question name', type: 'MW sandbox', editable: false
  },
  {
    name: 'Question name', type: 'MW fill-in-the-blank', editable: false
  },
  {
    name: 'Question name', type: 'MW sentence', editable: false
  },
  {
    name: 'Question name', type: 'N of M', editable: false
  }
];

class ClixTest extends Component {

  render() {


    return (

      <Article alignSelf='stretch' flex='grow'
      >
        <Header

          colorIndex='light-2'
          >
          <Heading tag='h2' strong={true} margin='none'>
            CLIx
          </Heading>
        </Header>
        <Section tag='main'
          primary={true}

          colorIndex='accent-1'
        >
<Heading tag='h2' strong={true} margin='none'>
            CLIx
          </Heading>
        </Section>
        <Footer float={true} fixed={true}

          colorIndex='brand'
        >
<Heading tag='h2' strong={true} margin='none'>
            CLIx
          </Heading>
        </Footer>
      </Article>

    );
  }
}

export default ClixTest;
