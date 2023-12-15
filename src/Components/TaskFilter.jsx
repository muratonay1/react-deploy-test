import React from 'react';
import { Form, Row, Col } from 'react-bootstrap'; // React Bootstrap kullanılarak

const TaskFilter = ({ onFilterChange }) => {
     return (
          <Form>
               <Row className="align-items-center">
                    <Col xs="auto" className="my-1">
                         <Form.Label className="me-sm-2" htmlFor="filterSelect" visuallyHidden>
                              Duruma Göre Filtrele
                         </Form.Label>
                         <Form.Control as="select" id="filterSelect" custom onChange={e => onFilterChange(e.target.value)}>
                              <option value="all">Tümü</option>
                              <option value="completed">Tamamlananlar</option>
                              <option value="pending">Bekleyenler</option>
                              {/* Diğer durumlar */}
                         </Form.Control>
                    </Col>
               </Row>
          </Form>
     );
}

export default TaskFilter;
