import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { logOut, setIsOrderMade } from '../../Store/Actions';
import { getIsLoggedIn } from '../../Store/selectors';

const styles = theme => ({
    grow: {
        flexGrow: 1
    }
});

class Header extends Component {
    static propTypes = {
        logOut: PropTypes.func.isRequired,
        setIsOrderMade: PropTypes.func.isRequired,
        isLoggedIn: PropTypes.bool.isRequired,
        classes: PropTypes.object.isRequired
    };

    handleLogOut = () => {
        const { logOut, setIsOrderMade } = this.props;
        setIsOrderMade(false);
        logOut();
    };

    render() {
        const { isLoggedIn, classes } = this.props;
        return (
            <AppBar position='static' color='inherit'>
                <Toolbar>
                    <Typography variant='h5' color='inherit' className={classes.grow}>Loft Taxi</Typography>
                    <Button component={Link} to='/map' color='inherit'>Карта</Button>
                    <Button component={Link} to='/profile' color='inherit'>Профиль</Button>
                    <Button
                        component={Link}
                        to='/login'
                        color='inherit'
                        onClick={this.handleLogOut}
                    >
                        {isLoggedIn ? 'Выйти' : 'Войти'}
                    </Button>
                </Toolbar>
            </AppBar>
        );
    }
}

const mapStateToProps = state => ({
   isLoggedIn: getIsLoggedIn(state)
});
const mapDispatchToProps = { logOut, setIsOrderMade };

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));