require 'test_helper'

class TreatsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @treat = treats(:one)
  end

  test "should get index" do
    get treats_url
    assert_response :success
  end

  test "should create treat" do
    assert_difference('Treat.count') do
      post treats_url, params: { treat: { health: @treat.health, name: @treat.name, type: @treat.type } }
    end

    assert_response 201
  end

  test "should show treat" do
    get treat_url(@treat)
    assert_response :success
  end

  test "should update treat" do
    patch treat_url(@treat), params: { treat: { health: @treat.health, name: @treat.name, type: @treat.type } }
    assert_response 200
  end

  test "should destroy treat" do
    assert_difference('Treat.count', -1) do
      delete treat_url(@treat)
    end

    assert_response 204
  end
end
