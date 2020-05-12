import React from 'react';
// import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Collapse from '@material-ui/core/Collapse';
import './SideBar.scss';

function SidebarItem({
  depthStep = 10, depth = 0, expanded, item, ...rest
}) {
  const [collapsed, setCollapsed] = React.useState(true);
  const {
    label, items, Icon, onClick: onClickProp,
  } = item;
  // console.log(label, '=====>lab', items, '====> item');
  function toggleCollapse() {
    setCollapsed(prevValue => !prevValue);
  }

  function onClick(e) {
    if (Array.isArray(items)) {
      toggleCollapse();
    }
    if (onClickProp) {
      onClickProp(e, item);
    }
  }

  // const onDashboard = () => <Link to="/dashboard" />;

  let expandIcon;

  if (Array.isArray(items) && items.length) {
    expandIcon = !collapsed ? (
      <ExpandLessIcon
        className="sidebar-item-expand-arrow sidebar-item-expand-arrow-expanded"
      />
    ) : (
      <ExpandMoreIcon className="sidebar-item-expand-arrow" />
    );
  }

  return (
    <>
      <ListItem
        className="sidebar-item"
        onClick={onClick}
        button
        dense
        {...rest}
      >
        {/* <div className="checking">Amos</div> */}
        <div
          style={{ paddingLeft: 2 * depth * depthStep }}
          className="sidebar-item-content"
        >
          {/* <div className="checking">Amos</div> */}
          {Icon && <Icon className="sidebar-item-icon" fontSize="small" />}
          <div className="sidebar-item-text">
            <div className="label">{label}</div>
            {/* {console.log(label)} */}
          </div>
        </div>
        {expandIcon}
      </ListItem>
      <Collapse in={!collapsed} timeout="auto" unmountOnExit>
        {Array.isArray(items) ? (
          <List disablePadding dense>
            {items.map(subItem => (
              <React.Fragment key={`${subItem.name}`}>
                {subItem === 'divider' ? (
                  <Divider style={{ margin: '6px 0' }} />
                ) : (
                  <SidebarItem
                    depth={depth + 1}
                    depthStep={depthStep}
                    item={subItem}
                  />
                )}
              </React.Fragment>
            ))}
          </List>
        ) : null}
      </Collapse>
    </>
  );
}

const SideItem = ({
  items1, items2, items3, items4, items5, depthStep, depth, expanded,
}) => (
  <>
    {/* <h1>90kobo SMS</h1> */}
    <div className="sidebarr">
      {/* {console.log(items)} */}
      {/* <h1>90kobo SMS</h1> */}
      <List disablePadding dense>
        <div className="checking">TOP-UP / RECHARGE</div>
        {items1.map(sidebarItem => (
          <React.Fragment key={`${sidebarItem.name}`}>
            {sidebarItem === 'divider' ? (
              <Divider style={{ margin: '6px 0' }} />
            ) : (
              <SidebarItem
                depthStep={depthStep}
                depth={depth}
                expanded={expanded}
                item={sidebarItem}
              />
            )}
          </React.Fragment>
        ))}
      </List>
      <List disablePadding dense>
        <div className="checking">BULK SMS</div>
        {items2.map(sidebarItem => (
          <React.Fragment key={`${sidebarItem.name}`}>
            {sidebarItem === 'divider' ? (
              <Divider style={{ margin: '6px 0' }} />
            ) : (
              <SidebarItem
                depthStep={depthStep}
                depth={depth}
                expanded={expanded}
                item={sidebarItem}
              />
            )}
          </React.Fragment>
        ))}
      </List>
      <List disablePadding dense>
        <div className="checking">REPORT</div>
        {items3.map(sidebarItem => (
          <React.Fragment key={`${sidebarItem.name}`}>
            {sidebarItem === 'divider' ? (
              <Divider style={{ margin: '6px 0' }} />
            ) : (
              <SidebarItem
                depthStep={depthStep}
                depth={depth}
                expanded={expanded}
                item={sidebarItem}
              />
            )}
          </React.Fragment>
        ))}
      </List>
      <List disablePadding dense>
        <div className="checking">CONTACT</div>
        {items4.map(sidebarItem => (
          <React.Fragment key={`${sidebarItem.name}`}>
            {sidebarItem === 'divider' ? (
              <Divider style={{ margin: '6px 0' }} />
            ) : (
              <SidebarItem
                depthStep={depthStep}
                depth={depth}
                expanded={expanded}
                item={sidebarItem}
              />
            )}
          </React.Fragment>
        ))}
      </List>
      <List disablePadding dense>
        <div className="checking">ACCOUNT & SETTING</div>
        {items5.map(sidebarItem => (
          <React.Fragment key={`${sidebarItem.name}`}>
            {sidebarItem === 'divider' ? (
              <Divider style={{ margin: '6px 0' }} />
            ) : (
              <SidebarItem
                depthStep={depthStep}
                depth={depth}
                expanded={expanded}
                item={sidebarItem}
              />
            )}
          </React.Fragment>
        ))}
      </List>
    </div>
  </>
);

export default SideItem;
