import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// grommet layout
import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';


// grommet structure
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
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import Menu from 'grommet/components/Menu';

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
import MenuIcon from 'grommet/components/icons/base/Menu';
import SubtractCircleIcon from 'grommet/components/icons/base/SubtractCircle';
import TrashIcon from 'grommet/components/icons/base/Trash';
import ViewIcon from 'grommet/components/icons/base/View';
import Logo from 'grommet/components/icons/Grommet';

// grommet media
import Image from 'grommet/components/Image';

// custom
import NavControl from '../components/NavControl';

// import CLIxLogo from '../../clix-logo.png';

const ASSESSMENTS = [
  {
    id: 1, name: 'Assessment name 01', published: true, publabel: 'Published'
  },
  {
    id: 2, name: 'Assessment name 02', published: false, publabel: '-'
  },
  {
    id: 3, name: 'Assessment name 03', published: true, publabel: 'Published'
  },
  {
    id: 4, name: 'Assessment name 04', published: false, publabel: '-'
  },
  {
    id: 5, name: 'Assessment name 05', published: true, publabel: 'Published'
  },
  {
    id: 6, name: 'Assessment name 06', published: true, publabel: 'Published'
  },
  {
    id: 7, name: 'Assessment name 07', published: false, publabel: '-'
  },
];


class ClixDash extends Component {

  render() {


    return (
      <Article primary={true} alignContent='between'>
        <Header direction='row'
          justify='start'
          size='small'
          alignSelf='center'
          pad={{ horizontal: 'medium', vertical: 'small', between: 'small' }}
          colorIndex='brand'
          >
          <Logo/>
           <Heading tag='h2' strong={true} margin='none'>
            [CLIx logo]
          </Heading>
        </Header>
        <Section alignContent='stretch'>
        <Box direction='row'
          justify='between'
          align='center'
          alignContent='between'
          wrap={true}
          pad={{ horizontal: 'medium', vertical: 'none', between: 'small' }}
          margin='none'
          colorIndex='light-1'
          separator='bottom'
          >
          <Heading tag='h3' strong={true} margin='none'>
            Home
          </Heading>
          <Menu responsive={true}
            icon={<MenuIcon />}
            label='Actions'
            inline={true}
            primary={false}
            direction='row'
            size='small'
            separator='vertical'
            >
            <Button label='Preview'
              icon={<ViewIcon />}
              plain={true}
              onClick={() => alert('Preview screen')} />
            <Button label='Edit'
              icon={<EditIcon />}
              plain={true}
              path='/clixeditassess'
            />
            <Button label='Embed code'
              icon={<CodeIcon />}
              plain={true}
              onClick={() => alert('Embed code generated')} />
            <Button label='Publish'
              icon={<DeployIcon />}
              plain={true}
              onClick={() => alert('Assessment published')} />
            <Button label='Delete'
              icon={<TrashIcon />}
              plain={true}
              onClick={() => alert('Delete confirmation modal')} />
          </Menu>
          <Button label='New assessment'
              icon={<AddIcon />}
              path='/clixnewassess'
              primary={true}
          />
        </Box>
        <Accordion openMulti={true}>
            <AccordionPanel heading='Biology'
              pad='medium'
            >
              <Table selectable={true}>
                  <TableHeader labels={['Name', 'Published']}
                    sortIndex={0}
                    sortAscending={true}
                     />
                  <tbody>
                  { ASSESSMENTS.map((assessment) =>
                    <TableRow key={assessment.id} >
                      <td>
                        {assessment.name}
                      </td>
                      <td>
                        {assessment.publabel}
                      </td>
                    </TableRow>
                  )}
                </tbody>
              </Table>
            </AccordionPanel>
            <AccordionPanel heading='Chemistry'
              pad='medium'
            >
              <Table selectable={true}>
                  <TableHeader labels={['Name', 'Published']}
                    sortIndex={0}
                    sortAscending={true}
                     />
                  <tbody>
                  { ASSESSMENTS.map((assessment) =>
                    <TableRow key={assessment.id}>
                      <td>
                        {assessment.name}
                      </td>
                      <td>
                        {assessment.publabel}
                      </td>
                    </TableRow>
                  )}
                </tbody>
              </Table>
            </AccordionPanel>
            <AccordionPanel heading='English'
              pad='medium'
            >
              <Table selectable={true}>
                  <TableHeader labels={['Name', 'Published']}
                    sortIndex={0}
                    sortAscending={true}
                     />
                  <tbody>
                  { ASSESSMENTS.map((assessment) =>
                    <TableRow key={assessment.id}>
                      <td>
                        {assessment.name}
                      </td>
                      <td>
                        {assessment.publabel}
                      </td>
                    </TableRow>
                  )}
                </tbody>
              </Table>
            </AccordionPanel>
            <AccordionPanel heading='Math'
              pad='medium'
            >
              <Table selectable={true}>
                  <TableHeader labels={['Name', 'Published']}
                    sortIndex={0}
                    sortAscending={true}
                     />
                  <tbody>
                  { ASSESSMENTS.map((assessment) =>
                    <TableRow key={assessment.id}>
                      <td>
                        {assessment.name}
                      </td>
                      <td>
                        {assessment.publabel}
                      </td>
                    </TableRow>
                  )}
                </tbody>
              </Table>
            </AccordionPanel>
            <AccordionPanel heading='Physics'
              pad='medium'
            >
              <Table selectable={true}>
                  <TableHeader labels={['Name', 'Published']}
                    sortIndex={0}
                    sortAscending={true}
                     />
                  <tbody>
                  { ASSESSMENTS.map((assessment) =>
                    <TableRow key={assessment.id}>
                      <td>
                        {assessment.name}
                      </td>
                      <td>
                        {assessment.publabel}
                      </td>
                    </TableRow>
                  )}
                </tbody>
              </Table>
            </AccordionPanel>
          </Accordion>
        <Box direction='column'
          justify='between'
          align='stretch'
          wrap={true}
          pad={{ horizontal: 'medium', vertical: 'medium', between: 'small' }}
          margin='none'
          colorIndex='neutral-1'
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
          </Section>
        <Footer direction='row'
          justify='start'
          size='medium'
          align='end'
          pad={{ horizontal: 'medium', vertical: 'small', between: 'small' }}
          colorIndex='brand'
          float={true} fixed={true}
        >
          <Anchor icon={<HomeIcon />}
            label='Home'
            animateIcon={true}
            href='#'
            primary={false}
            reverse={false}
          />
        </Footer>
      </Article>
    );
  }
}

export default ClixDash;
