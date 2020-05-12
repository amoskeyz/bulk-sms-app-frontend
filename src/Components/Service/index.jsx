import React from 'react';
import Card from '../Card';
import './Service.scss'

const Service = () => {
    return(
        <div className='Service'>
            <div className='nn'>
                <h4>Services</h4>
                    <hr/>
                </div>
            <div className="sc">
                <Card 
                Quote = 'Schedule messages for later delivery. Set up multiple schedules at a time and let out system do the rest.'
                Header ='Schedule and Send Later'
                Height = '280px'
                Width = '250px'
                Image = '../../assets/text-latency.svg'
                Margin = '40px'
                />
                <Card 
                Quote = 'Send messages to unlimited number of recipients. You are only limited by your available credit units.'
                Header ='Unlimited SMS Recipient'
                Height = '350px'
                Width = '300px'
                Image = '../../assets/text-latency.svg'
                Margin = '0'
                />
                <Card 
                Quote = 'Do you need to upload contacts? You can now upload numbers that are in .CSV format.'
                Header ='Upload Contacts in .CSV'
                Height = '280px'
                Width = '250px'
                Image = '../../assets/text-latency.svg'
                Margin = '40px'
                />
            </div>
        </div>
    )
}

export default Service;
