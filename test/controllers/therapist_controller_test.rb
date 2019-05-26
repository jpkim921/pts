require 'test_helper'

class TherapistControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get therapist_index_url
    assert_response :success
  end

  test "should get create" do
    get therapist_create_url
    assert_response :success
  end

  test "should get update" do
    get therapist_update_url
    assert_response :success
  end

  test "should get destroy" do
    get therapist_destroy_url
    assert_response :success
  end

end
