import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { setIsOrderMade } from '../../Store/Actions';
import { getCoordsError } from '../../Store/selectors';

const styles = theme => ({
    fieldAlign: {
        display: 'flex',
    },
    alignLeft: {
        justifyContent: 'flex-start'
    },
    alignCenter: {
        justifyContent: 'center'
    }
});

class OrderAlert extends Component {
    static propTypes = {
        setIsOrderMade: PropTypes.func.isRequired,
        classes: PropTypes.object.isRequired
    };

    handleClick = () => {
        const { setIsOrderMade } = this.props;
        setIsOrderMade(false)
    };

    render() {
        const { classes, errorCoords } = this.props;
        return (
            <Grid container >
                <Grid item xs={12} className={`${classes.alignCenter} ${classes.fieldAlign}`}>
                    <Typography variant='h4'>Заказ размещён</Typography>
                </Grid>
                <Grid item xs={12}>
                    {errorCoords && <Typography variant='body1'>{errorCoords}</Typography>}
                    {!errorCoords && <Typography variant='body1'>Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут</Typography>}
                </Grid>
                <Grid item xs={12} className={`${classes.alignLeft} ${classes.fieldAlign}`}>
                    <Button variant="outlined" color="primary" component='button' onClick={this.handleClick}>сделать новый заказ</Button>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
   errorCoords: getCoordsError(state)
});
const mapDispatchProps = { setIsOrderMade };

const WrappedOrderAlert = compose(
    connect(mapStateToProps, mapDispatchProps),
    withStyles(styles)
)(OrderAlert);

export default WrappedOrderAlert;