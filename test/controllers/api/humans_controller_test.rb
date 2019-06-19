require 'test_helper'

class Api::HumansControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_humans_index_url
    assert_response :success
  end

  test "should get update" do
    get api_humans_update_url
    assert_response :success
  end

end
