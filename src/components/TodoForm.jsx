/*--------------------------- Form with {useFormik} and Yup ---------------------------*/

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useFormik} from "formik";
import * as Yup from 'yup';

const TodoForm = ({handleAdd, removeAllTodos}) => {
    const formik = useFormik({
        initialValues: {
            title: '',
            description: ''
        },

        validationSchema: Yup.object({
            title: Yup.string().trim().required('Required to fill'),
            description: Yup.string().trim().required('Required to fill'),
        }),

        onSubmit: (values, {resetForm}) => {
            handleAdd(values);
            resetForm();
        },
    })

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group className='mb-3'>
                <Form.Label>Task title</Form.Label>
                <Form.Control
                    id='title'
                    type='text'
                    placeholder='Task title'
                    {...formik.getFieldProps('title')}/>
                {formik.touched.title && formik.errors.title ? (
                    <div>{formik.errors.title}</div>) : null}
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Task description</Form.Label>
                <Form.Control
                    id='description'
                    as='textarea'
                    placeholder='Task description'
                    style={{
                        height: '150px'
                    }}
                    {...formik.getFieldProps('description')} />
                {formik.touched.description && formik.errors.description ? (
                    <div>{formik.errors.description}</div>) : null}
            </Form.Group>
            <Button variant="primary mb-1 d-block"
                    type="submit">Create Task
            </Button>
            <Button variant="warning mb-1 d-block"
                    onClick={formik.handleReset}>Clear
            </Button>
            <Button variant="danger mb-1 d-block"
                    onClick={removeAllTodos}>Delete All
            </Button>
        </Form>
    )
}

export default TodoForm;

/*--------------------------------Form with {Formik}-------------------------------------------*/

// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import {Formik} from 'formik';
// import cn from 'classnames';
//
// const formInitialValues = {
//     title: '',
//     description: ''
// }
//
// const TodoForm = ({handleAdd, removeAllTodos}) => {
//
//     return (
//         <Formik
//             initialValues={formInitialValues}
//             onSubmit={(values, {resetForm}) => {
//                 handleAdd(values);
//                 resetForm();
//             }}
//         >
//             {({
//                   values,
//                   handleChange,
//                   handleBlur,
//                   handleSubmit,
//                   activeAddBtn = cn({
//                       'disabled': values.title.trim() === ''
//                           || values.description.trim() === ''
//                   }),
//                   handleReset,
//               }) => (
//                 <Form onSubmit={handleSubmit}>
//                     <Form.Group className='mb-3' controlId='todoFormTitle'>
//                         <Form.Label>Task title</Form.Label>
//                         <Form.Control
//                             name='title'
//                             type='text'
//                             value={values.title}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             placeholder='Task title'
//                         />
//                     </Form.Group>
//
//                     <Form.Group className='mb-3' controlId='todoFormDescription'>
//                         <Form.Label>Task description</Form.Label>
//                         <Form.Control
//                             name='description'
//                             as='textarea'
//                             placeholder='Task description'
//                             value={values.description}
//                             style={{
//                                 height: '150px'
//                             }}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                         />
//                     </Form.Group>
//                     <Button variant="primary mb-1 d-block"
//                             type="submit"
//                             className={activeAddBtn}
//                     >
//                         Create Task
//                     </Button>
//                     <Button variant="warning mb-1 d-block"
//                             onClick={handleReset}
//                     >
//                         Clear
//                     </Button>
//                     <Button variant="danger mb-1 d-block"
//                             onClick={removeAllTodos}
//                     >
//                         Delete All
//                     </Button>
//                 </Form>
//             )}
//         </Formik>
//     );
// }
//
// export default TodoForm;