<?php

namespace App\Http\Controllers;

use App\Model\Form;
use Illuminate\Http\Request;

class FormController extends Controller
{
    public function index()
    {
        return Form::all();
    }

    public function store(Request $request)
    {
        return Form::create($request->all());
    }

    public function show(Form $form)
    {
        return $form;
    }

    public function update(Request $request, Form $form)
    {
        $form->update($request->all());
        return $form;
    }

    public function destroy(Form $form)
    {
        $form->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
}
