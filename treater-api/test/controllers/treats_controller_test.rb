require 'test_helper'

class TreatsControllerTest < ActionController::TestCase
  setup do
    @treat = treats(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:treats)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create treat" do
    assert_difference('Treat.count') do
      post :create, treat: { health: @treat.health, name: @treat.name, type: @treat.type }
    end

    assert_redirected_to treat_path(assigns(:treat))
  end

  test "should show treat" do
    get :show, id: @treat
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @treat
    assert_response :success
  end

  test "should update treat" do
    patch :update, id: @treat, treat: { health: @treat.health, name: @treat.name, type: @treat.type }
    assert_redirected_to treat_path(assigns(:treat))
  end

  test "should destroy treat" do
    assert_difference('Treat.count', -1) do
      delete :destroy, id: @treat
    end

    assert_redirected_to treats_path
  end
end
