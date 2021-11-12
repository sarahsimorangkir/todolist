import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import FormCoding from './FormCoding'

test ('test corrected input', ()=>{
    render(<FormCoding />);
    fireEvent.input(screen.getByRole("textbox", {name : /nama/i}),{
        target : {value :'Sarah'},
    });
    fireEvent.input(screen.getByRole("textbox", {name: /email/i}),{
        target: {value:'sarah@gmail.com'},
    });
    expect(screen.getByLabelText(/Nama/)).toHaveValue('Sarah');
    expect(screen.getByLabelText(/Email/)).toHaveValue('sarah@gmail.com');

})

test ('test false input', ()=>{
    render(<FormCoding />);
    fireEvent.input(screen.getByRole("textbox", {name: /nama/i}), {
        target: {value : 'sarah123'},
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
        target: { value: 'Sarah Simorangkir' },
      });
      expect(screen.getByLabelText(/Nama/)).toHaveValue('sarah123');
    expect(screen.getByLabelText(/Email/)).toHaveValue('Sarah Simorangkir');
      expect(screen.getByText('Nama Lengkap Harus Berupa Huruf')).toBeInTheDocument();
      expect(screen.getByText('Email Tidak Sesuai')).toBeInTheDocument();
      
})

describe('Form', ()=>{
    test('render component', ()=>{
        render(<FormCoding/>);
        expect(screen.getByText(/Nama Lengkap:/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
        expect(screen.getByLabelText(/No Handphone:/)).toBeInTheDocument();
    });
})
