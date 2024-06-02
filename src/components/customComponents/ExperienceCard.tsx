import React from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import './ExpComponent.css'; // Import the custom CSS file

const { Meta } = Card;

interface ExpComponentProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ExpComponent: React.FC<ExpComponentProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="card-wrapper">
      <Card
        hoverable
        cover={<img alt={title} src={imageUrl} className="card-image" />}
        className="custom-card"
      >
        <Meta
          title={<h2 className="card-title">{title}</h2>}
          description={<p className="card-description">{description}</p>}
        />
      </Card>
    </div>
  );
};

export default ExpComponent;
