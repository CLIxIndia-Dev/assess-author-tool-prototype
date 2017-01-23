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
import FolderIcon from 'grommet/components/icons/base/Folder';
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
  }
];

class ClixEditAssess extends Component {
  render() {
    return (
      <Article full='horizontal'
        alignSelf='stretch'
        flex={true}
      >
        <Header direction='row'
          justify='start'
          size='small'
          alignSelf='center'
          pad={{ horizontal: 'medium', vertical: 'small', between: 'small' }}
          colorIndex='brand'
          >
          <Logo />
          <Heading tag='h2' strong={true} margin='none'>
            [CLIx logo]
          </Heading>
        </Header>
        <Section tag='main'
          primary={true}
          pad={{ horizontal: 'medium', vertical: 'small', between: 'small' }}
        >
          <Heading tag='h3' margin='none'>
              Edit Assessment
          </Heading>
          <Box direction='row'
            justify='between'
            align='center'
            alignContent='between'
            wrap={true}
            pad={{ horizontal: 'medium', vertical: 'medium', between: 'small' }}
            margin='none'
            colorIndex='light-2'
          >
            <Form colorIndex='light-1'>
              <FormField label='Assessment name'>
                <TextInput id='assessment-name'
                  name='assessment-name'
                  placeholder='Name your assessment'
                  value='Assessment name 03'
                />
              </FormField>
            </Form>
            <Box direction='column'
              pad={{ horizontal: 'none', vertical: 'none', between: 'small' }}
            >
              <Box alignSelf='end'><Paragraph
                margin='none'>
                Published: No
              </Paragraph></Box>
              <Menu responsive={true}
                inline={true}
                primary={false}
                direction='row'
                size='small'
                pad={{ horizontal: 'none', between: 'small' }}
              >
                <Button label='Preview assessment'
                  icon={<ViewIcon />}
                  plain={true}
                  onClick={() => alert('Preview screen')} />
                <Button label='Embed code'
                  icon={<CodeIcon />}
                  plain={true}
                  onClick={() => alert('Embed code generated')} />
                <Button label='Publish'
                  icon={<DeployIcon />}
                  plain={true}
                  onClick={() => alert('Assessment published')} />
              </Menu>
            </Box>
          </Box>
          <Box direction='column'
            justify='between'
            align='stretch'
            wrap={true}
            pad={{ horizontal: 'medium', vertical: 'medium', between: 'small' }}
            margin='none'
            colorIndex='light-2'
            >
            <Heading tag='h4' margin='none'>
              Embed code
              <Box wrap={true}
                pad={{ horizontal: 'medium', vertical: 'none', between: 'small' }}
                margin='none'
                colorIndex='light-1'
              >
                <Paragraph >
                Embed code here
                </Paragraph>
              </Box>
            </Heading>
          </Box>
          <Box alignContent='between'
            wrap={true}
            pad={{ horizontal: 'medium', vertical: 'none', between: 'small' }}
            margin='none'
            colorIndex='light-1'
            >
            <List align='center'
              selectable={true}
              full={true}
              size='full'
              flex={true}
            >
              <ListItem
                separator='top'
                pad={{ horizontal: 'medium', vertical: 'small', between: 'large' }}
                colorIndex='light-2'
                >
                <Box textAlign='left'

                  size={{ width: { min: 'medium', max: 'medium' } }}
                >
                  Question name
                </Box>
                <Box textAlign='left'

                  size={{ width: { min: 'small', max: 'medium' } }}
                >
                  Question type
                </Box>
                <Box pad={{ horizontal: 'medium', vertical: 'none', between: 'none' }}

                >
                  Edit
                </Box>
                <Box pad={{ horizontal: 'small', vertical: 'none', between: 'none' }}

                >
                  Reorder
                </Box>
                <Box pad={{ horizontal: 'none', vertical: 'none', between: 'none' }}

                >
                  Remove
                </Box>
              </ListItem>
              { QUESTIONS.map(question =>
                <ListItem
                  separator='top'
                  pad={{ horizontal: 'medium', vertical: 'small', between: 'large' }}
                  colorIndex='light-1'
                >
                  <Box textAlign='left'
                    size={{ width: { min: 'medium', max: 'medium' } }}
                  >
                    {question.name}
                  </Box>
                  <Box textAlign='left'
                    size={{ width: { min: 'small', max: 'medium' } }}
                  >
                    {question.type}
                  </Box>
                  <Box pad={{ horizontal: 'medium', vertical: 'none', between: 'none' }}
                  >
                    {question.editable ? <EditIcon colorIndex='brand' /> :
                    <EditIcon colorIndex='unknown' />}
                  </Box>
                  <Box direction='row' pad={{ horizontal: 'small', vertical: 'none', between: 'small' }}

                  >
                    <LinkDownIcon colorIndex='brand' />
                    <LinkUpIcon colorIndex='brand' />
                  </Box>
                  <Box pad={{ horizontal: 'medium', vertical: 'none', between: 'none' }}
                  >
                    <SubtractCircleIcon colorIndex='brand' />
                  </Box>
                </ListItem>
                )}
              <Button href='#'
                accent={false}
                plain={false}
                path='/'
                secondary={false}
                primary={false}

              >

                <Box direction='row'
                  pad={{ horizontal: 'small', vertical: 'small', between: 'small' }}
                  separator='all'
                  colorIndex='neutral-2-a'
                >
                  <AddIcon colorIndex='brand' />
                  <Label colorIndex='brand' margin='none'>Add new item</Label>
                </Box>
              </Button>
            </List>
            <Menu responsive={true}
              inline={true}
              primary={false}
              direction='row'
              size='small'
              pad={{ horizontal: 'none', between: 'small' }}
              justify='end'
            >
              <Button label='Save assessment'
                path='/clixdash'
              />
              <Button label='Cancel'
                path='/clixdash'
              />
            </Menu>
          </Box>
        </Section>
        <Footer direction='row'
          justify='start'
          size='medium'
          align='end'
          pad={{ horizontal: 'medium', vertical: 'small', between: 'small' }}
          colorIndex='brand'
          float={true}
          fixed={true}
        >
          <Anchor icon={<HomeIcon />}
            label='Home'
            animateIcon={true}
            href='/clixdash'
            primary={false}
            reverse={false}
          />
          <Paragraph margin='none'>/</Paragraph>
          <Anchor
            label='Edit assessment'
            href='#'
            primary={false}
            reverse={false}
          />
        </Footer>
      </Article>
    );
  }
}

export default ClixEditAssess;
